# Forge2 Qualifier - Uttam Maurya

## Project Overview

A Trello-style Kanban Board built using Laravel (Backend) and React (Frontend).

## Tech Stack

* Laravel 13
* React + Vite
* SQLite
* OpenClaw
* Slack
* Gemini 2.5 Flash

## Features

* Boards
* Lists (Todo, Doing, Done)
* Cards
* Due Dates
* Member Assignment
* Tags

## Run Backend

```bash
cd backend
composer install
php artisan migrate
php artisan serve
```

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Live URL

(Add deployed URL here)

## GitHub Repository

(Add GitHub repo link here)



## Multi-Agent Architecture

TaskForge demonstrates collaboration between:

### Hermes

Planning Agent

Responsibilities:

* Create tasks
* Prioritize work
* Coordinate workflow

### OpenClaw

Execution Agent

Responsibilities:

* Generate code
* Complete assigned tasks
* Update project status

### Human Supervisor

Responsibilities:

* Approve work
* Monitor progress

Workflow:

Human
→ Hermes
→ OpenClaw
→ TaskForge Dashboard
