export interface User {
  id: number;
  workspace_id: string;
  fullname: string;
  email: string;
  password: string;
  refresh_token: string | null;
  refresh_token_expires_at: Date | null;
  role: 'Admin' | 'Sales Executive';
  created_at: Date;
  updated_at: Date;
}

export interface CreateUserInput {
  workspace_id: string;
  fullname: string;
  email: string;
  password: string;
}

export interface UpdateUserInput {
  fullname?: string;
  mobile?: string;
}

export interface UpdateUserStatusInput {
  status: 'Active' | 'Inactive';
}