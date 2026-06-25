# 🚀 Forge2 Qualifier – TaskForge

**Author:** Uttam Maurya

TaskForge is a multi-agent project management platform built for the Forge2 Qualifier. It combines a Laravel backend, React frontend, and an agent-oriented architecture inspired by Hermes and OpenClaw to demonstrate task orchestration, project monitoring, and collaborative workflows.

---

# Project Overview

TaskForge provides a modern Kanban-style dashboard for managing software projects. It enables users to organize work into boards, lists, and cards while tracking progress through an intuitive interface.

The project demonstrates how planning agents and execution agents can collaborate with a human supervisor to manage project lifecycles.

---

# Tech Stack

## Frontend

* React
* Vite
* JavaScript
* CSS

## Backend

* Laravel
* REST APIs
* SQLite

## AI / Agent Layer

* Hermes (Planning Agent)
* OpenClaw (Execution Agent)
* Slack Integration (Communication Layer)
* Gemini 2.5 Flash

---

# Features

* Kanban Board
* Boards
* Lists (Todo, Doing, Review, Done)
* Task Cards
* Due Dates
* Member Assignment
* Tags
* Agent Dashboard
* Activity Feed
* REST API Backend
* Multi-Agent Architecture

---

# Multi-Agent Architecture

## Hermes – Planning Agent

Responsibilities:

* Analyze project goals
* Break work into smaller tasks
* Prioritize the backlog
* Coordinate execution

---

## OpenClaw – Execution Agent

Responsibilities:

* Implement assigned tasks
* Generate application code
* Update task status
* Record execution progress

---

## Human Supervisor

Responsibilities:

* Review generated work
* Monitor project progress
* Approve completed tasks
* Manage deployment

---

# Workflow

```text
Human Request
        │
        ▼
 Hermes (Planning)
        │
        ▼
 OpenClaw (Execution)
        │
        ▼
 Laravel Backend APIs
        │
        ▼
 SQLite Database
        │
        ▼
 React Dashboard
```

---

# Backend APIs

```text
GET     /api/boards
POST    /api/boards

GET     /api/lists
POST    /api/lists

GET     /api/cards
POST    /api/cards

GET     /api/agents
POST    /api/agents

GET     /api/tasks
POST    /api/tasks

GET     /api/activities
POST    /api/activities
```

---

# Local Setup

## Backend

```bash
cd backend
composer install
php artisan migrate
php artisan serve
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# Live Demo

https://forge2-qualifier-uttam.vercel.app

---

# GitHub Repository

https://github.com/ummaurya2005/Forge2-qualifier-uttam

---

# Project Structure

```text
Forge2-qualifier-uttam
│
├── backend/
├── frontend/
├── README.md
├── ARCHITECTURE.md
├── SKILL.md
├── agent-log.md
├── .env.example
└── screenshots/
```

---

# Future Improvements

* Real-time Slack integration
* Autonomous agent execution
* Live task synchronization
* AI-assisted sprint planning
* GitHub Pull Request automation
* Role-based authentication
* Real-time notifications

---

# License

This project was developed as part of the Forge2 Qualifier to demonstrate a multi-agent software engineering workflow using Laravel, React, and AI-assisted orchestration.
