import { Request, Response } from "express";
import { createWorkSpaceService, getMyWorkSpaceService, updateWorkSpaceService } from "./workspace.service";
import { CreateWorkspaceInput, UpdateWorkspaceInput } from "./workspace.interface";

export const createWorkSpaceController = async(req: Request, res: Response)=>{
    try {
        const {name} = req.body as CreateWorkspaceInput;
        if(!name){
            res.status(400).json({message: `Workspace name is required.`});
        }
        const workspcae  = await createWorkSpaceService(name);
        res.status(200).json({message: `Workspace created successfully.`, data: workspcae});
    } 
    catch (error) {
        if(error instanceof Error){
            res.status(500).json({message: `Erros comes during workspace creation please try sometime later.`});
            console.log(error.message);
        }
    }
}

export const getMyWorkSpaceController = async(req: Request, res: Response)=>{
    try {
        const userId = req.params.id as string;
        if(!userId){
            res.status(400).json({message: `User id is required.`});
        }
        const myWorkSpace = await getMyWorkSpaceService(userId);
        res.status(200).json({message: `Workspace created successfully.`, data: myWorkSpace});
    } 
    catch (error) {
       if(error instanceof Error){
           console.log(error.message);
           return res.status(500).json({message: `Erros comes during workspace creation please try sometime later.`});
       } 
    }
}


export const updateWorkSpaceController = async(req: Request, res: Response)=>{
    try {
        const {name} = req.body as UpdateWorkspaceInput;
        if(!name){
            res.status(400).json({message: `Workspace name is required.`});
        }

        const userId = req.params.id as string;
        if(!userId){
            res.status(400).json({message: `User id is required.`});
        }
        const workspcae  = await updateWorkSpaceService(name, userId);
        res.status(200).json({message: `Workspace  name updated successfully.`, data: workspcae});
    } 
    catch (error) {
        if(error instanceof Error){
            res.status(500).json({message: `Erros comes during workspace name update, please try sometime later.`});
            console.log(error.message);
        }
    }
}