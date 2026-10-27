CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    workspace_id UUID NOT NULL REFRENCE workspaces(id),
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    refresh_token VARCHAR(255),
    refresh_token_expires_at TIMESTAMPTZ,
    role VARCHAR(50) NOT NULL DEFAULT 'Sales Executive'
    CHECK (role IN ('Admin', 'Sales Executive')),
    status VARCHAR(50) NOT NULL DEFAULT 'Active'
    CHECK (status IN ('Active', 'Inactive')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)