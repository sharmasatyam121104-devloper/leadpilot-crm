export interface Workspace {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateWorkspaceInput {
  name: string;
}

export interface UpdateWorkspaceInput {
  name: string;
}