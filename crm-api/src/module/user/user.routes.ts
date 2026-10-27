import { Router } from "express";
import { ChangeUserStatusController, createUserController, getAllUserOfWorkspaceController, getSingleUserOfWorkspaceController, updateUserDataController } from "./user.controller";

const UserRouter = Router()

UserRouter.post("/", createUserController)
UserRouter.get("/", getAllUserOfWorkspaceController)
UserRouter.get("/:userId", getSingleUserOfWorkspaceController)
UserRouter.patch("/:userId", updateUserDataController)
UserRouter.patch("/status:userId", ChangeUserStatusController)

export default UserRouter;
