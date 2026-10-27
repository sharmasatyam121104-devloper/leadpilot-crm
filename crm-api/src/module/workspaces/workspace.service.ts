import pool from "../../config/db.config";

export const createWorkSpaceService = async (name: string) => {
    const workspace = await pool.query(`INSERT INTO workspaces (name) VALUES ($1) RETURNING *;`, [name]);
    if(!workspace.rows[0]){
        throw new Error('Workspace not created, please try again.');
    }
    return workspace.rows[0];
};

export const getMyWorkSpaceService = async ( userId: string) => {
    const workspace = await pool.query(`SELECT * FROM uers WHERE id = $1;`, [userId]);
    if(!workspace.rows[0]){
        throw new Error('Workspace not found, please try again.');
    }

    const workSpaceId = workspace.rows[0].workspace_id;

    const myWorkSpace = await pool.query(`SELECT * FROM workspaces WHERE id = $1;`, [workSpaceId]);
    if(!myWorkSpace.rows[0]){
        throw new Error('Workspace not found, please try again.');
    }

    return workspace.rows[0];
};

export const updateWorkSpaceService =  async (name: string, userId: string) => {
    const workSpaceData = await pool.query(`SELECT workspace_id FROM users WHERE id = $1;`, [userId]);
    if(!workSpaceData.rows[0]){
        throw new Error('Workspace not found, please try again.');
    }

    const workSpaceId = workSpaceData.rows[0].workspace_id;
    const updatedWorkspace = await pool.query(`UPDATE workspaces SET name = $1 WHERE id = $2 RETURNING *;`, [name, workSpaceId]);
    if(!updatedWorkspace.rows[0]){
        throw new Error('Workspace not updated, please try again.');
    }

    return updatedWorkspace.rows[0];
};