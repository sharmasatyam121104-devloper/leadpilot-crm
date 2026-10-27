import { Request, Response } from "express";
import { CreateUserInput, UpdateUserInput, UpdateUserStatusInput } from "./user.interface";
import { ChangeUserStatusService, createUserService, getAllUserOfWorkspaceService, getSingleUserOfWorkspaceService, updateUserDataService } from "./user.service";

export const createUserController = async(req: Request, res: Response)=>{
    try {
        const body = req.body as CreateUserInput;
        const user  = await createUserService(body);
        res.status(200).json({message: `User created successfully.`, data: user});
    } 
    catch (error) {
       if(error instanceof Error){
           console.log(error.message);
           return res.status(500).json({message: `Erros comes during user creation please try sometime later.`});
       } 
    }
}

export const getAllUserOfWorkspaceController = async(req: Request, res: Response)=>{
    try {
        const workspaceId = req.params.id as string;
        if(!workspaceId){
            res.status(400).json({message: `Workspace id is required.`});
        }

        const yourId = req.params.yourId as string;
        if(!yourId){
            res.status(400).json({message: `Your id is required.`});
        }

        const page = Number(req.params.page) || 1 as number;
        const limit = Number(req.params.limit) || 10 as number;
        const offset = (page - 1) * limit;

        if(!page){
            res.status(400).json({message: `Page is required.`});
        }

        const users  = await getAllUserOfWorkspaceService(workspaceId, yourId, page, limit, offset);
        res.status(200).json({message: `All user of your workspace fetch successfully.`, data: users});
    } 
    catch (error) {
       if(error instanceof Error){
           console.log(error.message);
           return res.status(500).json({message: `Erros comes during user creation please try sometime later.`});
       }    
    }
}
export const getSingleUserOfWorkspaceController = async(req: Request, res: Response)=>{
    try {
        const workspaceId = req.params.id as string;
        if(!workspaceId){
            res.status(400).json({message: `Workspace id is required.`});
        }

        const yourId = req.params.yourId as string;
        if(!yourId){
            res.status(400).json({message: `Your id is required.`});
        }

        const targetUserId = req.params.userId as string; // target user

        const user = await getSingleUserOfWorkspaceService(workspaceId, targetUserId);
        res.status(200).json({message: `Single user of your workspace fetch successfully.`, data: user});
    } 
    catch (error) {
       if(error instanceof Error){
           console.log(error.message);
           return res.status(500).json({message: `Erros comes during user creation please try sometime later.`});
       }    
    }
}

export const updateUserDataController = async(req: Request, res: Response)=>{
    try {
        const body = req.body as UpdateUserInput;
        if(!body.fullname && !body.mobile){
            return res.status(400).json({message: `User fullname or mobile is required.`});
        }

        const userId = req.params.userId as string;
        if(!userId){
            res.status(400).json({message: `User id is required.`});
        }

        const user  = await updateUserDataService(body, userId);
        res.status(200).json({message: `Your data updated successfully.`, data: user});

    } 
    catch (error) {
       if(error instanceof Error){
           console.log(error.message);
           return res.status(500).json({message: `Erros comes during user creation please try sometime later.`});
       }    
    }
}

export const ChangeUserStatusController = async(req: Request, res: Response)=>{
    try {

        const body = req.body as UpdateUserStatusInput;

        const userId = req.params.userId as string;
        if(!userId){
            res.status(400).json({message: `User id is required.`});
        }

        const status = body.status;
        if(!status){
            res.status(400).json({message: `User status is required.`});
        }

        const user  = await ChangeUserStatusService(status, userId);
        res.status(200).json({message: `Your data updated successfully.`, data: user});
    } 
    catch (error) {
       if(error instanceof Error){
           console.log(error.message);
           return res.status(500).json({message: `Erros comes during user creation please try sometime later.`});
       }    
    }
}