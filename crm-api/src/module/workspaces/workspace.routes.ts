import { Router } from "express";
import { createWorkSpaceController, getMyWorkSpaceController, updateWorkSpaceController } from "./workspace.controller";

const WorkSpaceRouter = Router()

WorkSpaceRouter.post("/", createWorkSpaceController)
WorkSpaceRouter.get("/", getMyWorkSpaceController)
WorkSpaceRouter.put('/:name', updateWorkSpaceController)

export default WorkSpaceRouter;