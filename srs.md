# Software Requirements Specification (SRS)
## LeadPilot AI – GenAI-Powered CRM

**Version:** 1.1  
**Project Type:** Web Application  
**Development Timeline:** 1 Month  
**Technology Stack:** React, TypeScript, Node.js, Express.js, PostgreSQL, Prisma ORM, and GenAI API

---

## 1. Introduction

### 1.1 Purpose

LeadPilot AI is a web-based Customer Relationship Management (CRM) system designed for small businesses and sales teams.

The system will help businesses manage customer enquiries, track sales opportunities, organize follow-up activities, and use Generative AI to understand customer requirements and prepare personalized follow-up messages.

### 1.2 Problem Statement

Small businesses often manage customer enquiries through WhatsApp, spreadsheets, and manual notes. This can result in missed follow-ups, poor tracking of sales opportunities, and difficulty managing customer information.

LeadPilot AI aims to provide a centralized platform for managing leads and improving the sales workflow using AI-assisted features.

### 1.3 Project Objectives

- Maintain customer and lead information in a centralized system.
- Track leads through different sales stages.
- Organize follow-up tasks and activities.
- Use GenAI to summarize enquiries and generate message drafts.
- Provide a simple dashboard for monitoring sales activities.

### 1.4 Scope

The MVP will include user authentication, lead management, sales pipeline, follow-up tasks, dashboard statistics, and three AI-assisted features.

The system will not include automated WhatsApp messaging, payment processing, invoicing, or advanced sales forecasting.

---

## 2. User Roles

### 2.1 Business Owner / Admin

The Admin will be able to:

- Register and log in to the CRM.
- Manage business leads and customer information.
- Create and manage sales team accounts.
- Assign leads to sales executives.
- View all business leads and sales activities.
- Monitor dashboard statistics.

### 2.2 Sales Executive

The Sales Executive will be able to:

- Log in to the CRM.
- View leads assigned to them.
- Add and update lead information.
- Update lead status.
- Add notes and follow-up tasks.
- Use AI features for lead analysis and message generation.

Sales executives will not be allowed to manage other users or access leads belonging to other businesses.

---

## 3. Functional Requirements

### FR-01: User Authentication

The system shall allow users to register and log in securely.

- Users shall log in using their email and password.
- Passwords shall be stored securely using hashing.
- Protected pages shall require authentication.
- Users shall be able to log out.
- The system shall enforce role-based access control.

### FR-02: Lead Management

The system shall allow authorized users to manage leads.

Each lead shall contain:

- Lead name
- Email address
- Phone number
- Company or business name
- Customer enquiry or requirement
- Lead source
- Lead status
- Assigned sales executive
- Created date and updated date

Users shall be able to:

- Create new leads.
- View lead details.
- Edit lead information.
- Delete leads with confirmation.
- Search leads by name, email, or company.
- Filter leads by status or assigned employee.

The system shall prevent duplicate lead creation within the same business when the same email address is already registered.

### FR-03: Sales Pipeline

The system shall provide a sales pipeline to track lead progress.

The lead status shall include:

1. New
2. Contacted
3. Qualified
4. Won
5. Lost

Users shall be able to change lead status from the lead details page or pipeline interface.

The system shall display leads according to their current sales stage.

### FR-04: Lead Assignment

The Admin shall be able to assign leads to sales executives.

- Admin shall view available sales executives.
- Admin shall assign or reassign leads.
- Sales executives shall only access leads assigned to them.
- The system shall record the assigned employee and assignment changes.

### FR-05: Follow-up Tasks

The system shall allow users to create follow-up tasks for leads.

Each task shall contain:

- Task title
- Related lead
- Description
- Due date and time
- Task status: Pending or Completed

Users shall be able to:

- Create follow-up tasks.
- View pending and completed tasks.
- Update task status.
- Edit or delete tasks.

The dashboard shall highlight overdue and upcoming follow-ups.

### FR-06: Lead Activity Notes

The system shall allow users to record activities related to a lead.

Activities may include:

- Customer call notes
- Meeting notes
- Follow-up details
- General customer interaction notes

Each activity shall contain its description, related lead, user, and creation timestamp.

### FR-07: AI Lead Analysis

The system shall provide an AI Lead Analysis feature.

When a user selects Analyze Lead, the system shall send the relevant lead enquiry and business context to the configured GenAI API.

The AI shall generate:

- A short enquiry summary.
- Identified customer requirements.
- Suggested next action.

The generated analysis shall be displayed to the user and associated with the lead.

The AI shall not automatically change lead status, assign employees, or create tasks.

### FR-08: AI Follow-up Message Generator

The system shall generate follow-up message drafts using lead information.

Users shall be able to select:

- Message type: Email or WhatsApp.
- Tone: Professional, Friendly, or Formal.

The AI shall generate a message based on the customer's enquiry and available lead details.

Users shall be able to:

- View the generated message.
- Edit the message.
- Copy the message.

The system shall not automatically send messages to customers.

### FR-09: AI Next Action Suggestion

The system shall suggest a possible next action based on the lead's enquiry, status, and recent activities.

Examples include:

- Schedule a discovery call.
- Ask the customer about their budget.
- Send a quotation.
- Follow up on the previous enquiry.

Suggestions shall be advisory only. Users shall decide whether to perform the suggested action.

### FR-10: Dashboard

The system shall provide a dashboard containing:

- Total number of leads.
- Leads by sales stage.
- Won and Lost leads.
- Pending follow-up tasks.
- Overdue follow-up tasks.

The dashboard shall display data only from the user's authorized business records.

---

## 4. Non-Functional Requirements

### NFR-01: Security

- Passwords shall be hashed before storage.
- Authentication and authorization shall be enforced on the backend.
- Users shall not access another business's leads or activities.
- AI API keys shall remain on the server and shall not be exposed in frontend code.
- User inputs shall be validated and sanitized.
- Database queries shall use Prisma's parameterized query mechanisms.

### NFR-02: Performance

- Normal CRM operations should respond within 2 seconds under typical MVP usage.
- AI responses may take longer and shall display a loading indicator.
- The system shall handle AI API errors gracefully.

### NFR-03: Usability

- The interface shall be responsive on desktop, tablet, and mobile.
- Forms shall display validation errors.
- Loading, empty, and error states shall be provided.
- Important actions such as deleting leads shall require confirmation.

### NFR-04: Reliability

- The system shall prevent unauthorized database operations.
- AI API failures shall not prevent users from viewing or editing existing leads.
- Lead and task data shall be stored persistently in PostgreSQL.
- Database relationships shall maintain referential integrity through foreign keys.

---

## 5. Proposed System Architecture

The system shall follow a client-server architecture.

**Frontend:** React application for authentication, dashboard, lead management, pipeline, and AI interactions.

**Backend:** Node.js and Express.js REST API for authentication, lead operations, follow-up management, authorization, and AI integration.

**Database:** PostgreSQL for storing users, businesses, leads, activities, and follow-up tasks.

**ORM:** Prisma shall be used to define the database schema, manage migrations, and perform database queries from the backend.

**AI Service:** A backend service shall communicate with a configured GenAI provider. It shall validate AI requests, process responses, and return structured results to the frontend.

---

## 6. Database Design

The system shall use a relational database structure in PostgreSQL.

### 6.1 Business Table

Stores business or workspace information.

| Field | Type | Description |
|---|---|---|
| id | UUID | Primary key |
| name | VARCHAR | Business name |
| createdAt | TIMESTAMP | Creation date |

### 6.2 User Table

Stores user authentication and role information.

| Field | Type | Description |
|---|---|---|
| id | UUID | Primary key |
| businessId | UUID | Foreign key to Business |
| name | VARCHAR | User name |
| email | VARCHAR | User email |
| passwordHash | VARCHAR | Hashed password |
| role | ENUM | ADMIN or SALES_EXECUTIVE |
| createdAt | TIMESTAMP | Creation date |

The email address shall be unique within a business.

### 6.3 Lead Table

Stores customer enquiries and sales opportunities.

| Field | Type | Description |
|---|---|---|
| id | UUID | Primary key |
| businessId | UUID | Foreign key to Business |
| name | VARCHAR | Customer name |
| email | VARCHAR | Customer email |
| phone | VARCHAR | Customer phone |
| company | VARCHAR | Company name |
| enquiry | TEXT | Customer requirement |
| source | VARCHAR | Lead source |
| status | ENUM | Sales stage |
| assignedToId | UUID | Foreign key to User |
| createdAt | TIMESTAMP | Creation date |
| updatedAt | TIMESTAMP | Last update |

### 6.4 Follow-up Task Table

Stores follow-up activities and reminders.

| Field | Type | Description |
|---|---|---|
| id | UUID | Primary key |
| businessId | UUID | Foreign key to Business |
| leadId | UUID | Foreign key to Lead |
| title | VARCHAR | Task title |
| description | TEXT | Task description |
| dueAt | TIMESTAMP | Follow-up date and time |
| status | ENUM | PENDING or COMPLETED |
| createdById | UUID | Foreign key to User |
| createdAt | TIMESTAMP | Creation date |

### 6.5 Lead Activity Table

Stores customer interaction history.

| Field | Type | Description |
|---|---|---|
| id | UUID | Primary key |
| businessId | UUID | Foreign key to Business |
| leadId | UUID | Foreign key to Lead |
| description | TEXT | Activity details |
| createdById | UUID | Foreign key to User |
| createdAt | TIMESTAMP | Creation date |

### 6.6 Relationships

- One Business can have multiple Users.
- One Business can have multiple Leads.
- One User can be assigned multiple Leads.
- One Lead can have multiple Follow-up Tasks.
- One Lead can have multiple Lead Activities.
- Each Follow-up Task belongs to one Lead.
- Each Lead Activity belongs to one Lead.

All related records shall use foreign keys to maintain data consistency.

---

## 7. Assumptions and Constraints

- The application will initially target small businesses with a single business workspace.
- Each business shall have its own users and lead records.
- AI features shall require a valid API key and internet connectivity.
- AI-generated information may be inaccurate and shall be reviewed by the user.
- The MVP shall prioritize core CRM workflows over advanced integrations.
- PostgreSQL shall be the primary database.
- Prisma shall manage database schema changes through migrations.

---

## 8. Acceptance Criteria

The MVP shall be considered complete when:

1. Admin and Sales Executive can securely log in.
2. Admin can create, update, assign, and manage leads.
3. Sales executives can manage their assigned leads.
4. Users can move leads through the sales pipeline.
5. Users can create and complete follow-up tasks.
6. Users can record lead activities and notes.
7. AI can summarize a lead enquiry and suggest a next action.
8. AI can generate editable follow-up message drafts.
9. Dashboard statistics reflect the stored CRM data.
10. Database relationships and access restrictions work correctly.
11. The application is deployed and usable through a web browser.

---

## 9. Out of Scope

The following features are excluded from the one-month MVP:

- Automated WhatsApp or email sending.
- WhatsApp Business API integration.
- Voice calling and call recording.
- Billing, invoicing, and payment collection.
- Advanced AI chatbot.
- AI-based sales forecasting.
- Complex workflow automation.
- Mobile application development.

---

## 10. Development Schedule

| Week | Deliverables |
|---|---|
| Week 1 | PostgreSQL setup, Prisma schema, authentication, lead CRUD |
| Week 2 | Sales pipeline, lead assignment, activities, follow-up tasks |
| Week 3 | Dashboard and GenAI integration |
| Week 4 | Testing, bug fixing, deployment, and documentation |

**Final Deliverable:** A deployed, responsive GenAI-powered CRM MVP that enables small businesses to manage leads, organize sales follow-ups, and use AI-assisted sales features using PostgreSQL as the primary database.
