# Smart Help Desk 
Frontend: https://smarthelpdesk-frontend.vercel.app/
Backend: https://smarthelpdesk-be.onrender.com

A full-stack Help Desk / Ticket Management System built using the MEAN Stack (MongoDB, Express.js, Angular, Node.js). The application allows employees to raise support tickets, administrators to manage users and assign tickets, and engineers to resolve issues through a structured workflow.

## Features

### Authentication & Authorization

* JWT-based authentication
* User registration and login
* Protected routes using Angular Route Guards
* Role-based access control
* Supported roles:

  * Admin
  * Engineer
  * Employee

Register as a new user to access employee dashboard

<img width="1892" height="961" alt="image" src="https://github.com/user-attachments/assets/ef3d32b0-3b4f-48fa-b496-4b0481e9c048" />
<img width="1913" height="962" alt="image" src="https://github.com/user-attachments/assets/6197c1a7-b51a-42aa-9a35-e3e4ea8642b0" />


### Dashboard

* Total Tickets
* Open Tickets
* Assigned Tickets
* In Progress Tickets
* Resolved Tickets
* Recent Tickets Overview

<img width="1917" height="957" alt="image" src="https://github.com/user-attachments/assets/b9f4f85a-75b5-4800-ba3c-69472a4a6dc6" />

### Ticket Management

* Create new tickets
* View all tickets
* View my tickets
* View assigned tickets
* View resolved tickets
* Ticket details page
* Search tickets
* Status filter
* Priority filter
* Pagination support

<img width="1896" height="952" alt="image" src="https://github.com/user-attachments/assets/7dd36fd2-474c-4e0e-95eb-aa8e24467d77" />
<img width="1233" height="950" alt="image" src="https://github.com/user-attachments/assets/a922bbdb-650d-4956-831f-67dea6b71b9a" />


### Ticket Workflow

Ticket lifecycle follows:

OPEN → ASSIGNED → IN_PROGRESS → RESOLVED → REOPENED

<img width="1902" height="587" alt="image" src="https://github.com/user-attachments/assets/254e2d5d-6dc7-4ce7-a201-183bc055a714" />
<img width="1917" height="557" alt="image" src="https://github.com/user-attachments/assets/ee995ee4-93f0-480f-987e-05c894f7d76d" />
<img width="1917" height="966" alt="image" src="https://github.com/user-attachments/assets/072f511b-32a7-4707-afd4-ec0b3f755d60" />
<img width="1915" height="960" alt="image" src="https://github.com/user-attachments/assets/b6a36ca1-ca8d-4be4-9a09-e2b1ab86e411" />


### Assignment Management

* Admin can assign tickets to engineers
* Engineers can assign tickets to themselves
* Prevents duplicate assignment

### Comments & Activity Tracking

* Engineers can add resolution comments
* Employees can add additional comments after ticket creation
* Employees can reopen resolved tickets with comments
* Complete comment history tracking
* Status displayed alongside comments

### User Management

* View users
* Search users
* Filter users by role
* Delete users
* Update user roles

<img width="1890" height="947" alt="image" src="https://github.com/user-attachments/assets/2332d324-5067-4246-8339-d23c3255b113" />

### UI Features

* Interactive dashboard
* Sidebar navigation
* Header layout
* Status badges
* SweetAlert confirmations
* Modern card-based design
* Debounced search implementation

---

## Tech Stack

### Frontend

* Angular
* TypeScript
* SCSS
* Angular Router
* Angular Forms
* RxJS
* SweetAlert2

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Express Middleware

### Database

* MongoDB

---

## Project Structure

Frontend

src/
├── auth/
├── dashboard/
├── tickets/
├── users/
├── shared/
├── core/
│ ├── guards/
│ ├── interceptors/
│ └── services/

Backend

src/
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
└── server.js

---

## Installation

### Clone Repository

git clone https://github.com/your-username/smart-help-desk.git

cd smart-help-desk

### Backend Setup

cd smarthelpdesk_be

npm install

npm start

### Frontend Setup

cd smarthelpdesk_fe

npm install

ng serve

Frontend runs on:

http://localhost:4200

Backend runs on:

http://localhost:5000

---

## API Highlights

Authentication

POST /api/auth/register

POST /api/auth/login

Users

GET /api/users

PATCH /api/users/:id/role

DELETE /api/users/:id

Tickets

POST /api/tickets

GET /api/tickets

GET /api/tickets/:id

PATCH /api/tickets/:id/assign

PATCH /api/tickets/:id/status

POST /api/tickets/:id/comment

GET /api/tickets/dashboard/stats

---

## Roles & Permissions

### Admin

* View all tickets
* Assign tickets
* Manage users
* Update user roles
* View dashboard statistics

### Engineer

* View assigned tickets
* Assign tickets to self
* Update ticket status
* Resolve tickets
* Add comments

### Employee

* Create tickets
* View own tickets
* Add comments
* Reopen resolved tickets

---

## Future Enhancements

* Email notifications
* File attachments
* Activity timeline
* Dashboard charts
* Ticket categories management
* Export reports
* Deployment on cloud

---

## Learning Outcomes

This project demonstrates:

* REST API development
* Authentication & Authorization
* Role-Based Access Control (RBAC)
* MongoDB relationships and population
* Angular standalone components
* Reactive programming with RxJS
* Enterprise-style workflow implementation
* Full-stack application architecture

---

## Author

Developed by Rutuja Patil

MEAN Stack Developer
