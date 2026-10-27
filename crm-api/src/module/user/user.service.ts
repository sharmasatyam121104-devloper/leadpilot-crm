import pool from "../../config/db.config";
import { CreateUserInput } from "./user.interface";
import bcrypt from "bcrypt";

export const createUserService = async (body: CreateUserInput) => {
    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        // Workspace row lock
        const workSpaceData = await client.query(
            `SELECT id, admin_assign
             FROM workspaces
             WHERE id = $1
             FOR UPDATE`,
            [body.workspace_id]
        );

        if (!workSpaceData.rows[0]) {
            throw new Error("Workspace not found, please try again.");
        }

        const isAdminAssigned = workSpaceData.rows[0].admin_assign;

        const role = isAdminAssigned ? "Sales Executive" : "Admin";

        const hashedPassword = await bcrypt.hash(body.password, 10);

        // Create user
        const user = await client.query(
            `INSERT INTO users
                (workspace_id, fullname, email, password, role)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [
                body.workspace_id,
                body.fullname,
                body.email,
                hashedPassword,
                role
            ]
        );

        if (!user.rows[0]) {
            throw new Error("User not created, please try again.");
        }

        // First user Admin hai, toh workspace flag update karo
        if (!isAdminAssigned) {
            await client.query(
                `UPDATE workspaces
                 SET admin_assign = TRUE,
                     updated_at = NOW()
                 WHERE id = $1`,
                [body.workspace_id]
            );
        }

        await client.query("COMMIT");

        return user.rows[0];

    } 
    catch (error) {
        await client.query("ROLLBACK");
        throw error;

    } 
    finally {
        client.release();
    }
};

export const getAllUserOfWorkspaceService = async(workspaceId: string, yourId: string, page: number, limit: number, offset: number) => {
    const users = await pool.query(`SELECT * FROM users WHERE workspace_id = $1 AND id != $2;`, [workspaceId, yourId, limit, offset]);
    if(!users.rows[0]){
        throw new Error('User not found, please try again.');
    }

    const totalUsers = await pool.query(`SELECT COUNT(*) FROM users WHERE workspace_id = $1 AND id != $2;`, [workspaceId, yourId]);

    return {
        users: users.rows, 
        pagination: {
            page,
            limit,
            totalUsers: totalUsers.rows[0].total,
            totalPages: Math.ceil(totalUsers.rows[0].total / limit)
        }
   };
}

export const getSingleUserOfWorkspaceService = async(workspaceId: string, targetUserId: string) => {
    const user = await pool.query(`SELECT * FROM users WHERE workspace_id = $1 AND id = $2;`, [workspaceId, targetUserId]);
    if(!user.rows[0]){
        throw new Error('User not found, please try again.');
    }

    return user.rows[0];
}

export const updateUserDataService = async( body: any, userId: string) => {
    const fullname = body.fullname ? body.fullname : null;
    const mobile = body.mobile ? body.mobile : null;

    const value: any[] = []
    if(fullname) value.push(fullname);
    if(mobile) value.push(mobile);

    const upadtedUser =  await pool.query(`UPDATE users SET ${value.join(", ")} WHERE id = $3 RETURNING *;`, [...value, userId]);
    if(!upadtedUser.rows[0]){
        throw new Error('User not updated, please try again.');
    }

    return upadtedUser.rows[0];
}


export const ChangeUserStatusService = async(status: string, userId: string) => {
    const upadtedUser =  await pool.query(`UPDATE users SET status = $1 WHERE id = $2 RETURNING *;`, [status, userId]);
    if(!upadtedUser.rows[0]){
        throw new Error('User not updated, please try again.');
    }

    return upadtedUser.rows[0];
}