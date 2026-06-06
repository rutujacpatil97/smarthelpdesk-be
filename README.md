# Smart Help Desk - https://smarthelpdesk-frontend.vercel.app

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
 
## Demo Credentials To explore the application:

**Engineer Role Login**
- Email: rutuja@gmail.com
- Password: Rutuja@123
> Note: This is a sample account for testing purposes only.

Register as a new user to access employee dashboard



### Dashboard

* Total Tickets
* Open Tickets
* Assigned Tickets
* In Progress Tickets
* Resolved Tickets
* Recent Tickets Overview

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

### Ticket Workflow

Ticket lifecycle follows:

OPEN → ASSIGNED → IN_PROGRESS → RESOLVED → REOPENED

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
