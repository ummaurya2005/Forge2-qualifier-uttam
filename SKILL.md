# SKILL.md

# TaskForge - Agent Skill Definitions

## Overview

TaskForge is a multi-agent task orchestration platform where specialized AI agents collaborate to manage software projects. Each agent has clearly defined responsibilities, allowing complex workflows to be broken into manageable tasks.

---

# Hermes (Planning Agent)

## Primary Responsibilities

* Understand user requirements
* Analyze project objectives
* Break large goals into smaller tasks
* Prioritize work
* Assign tasks to execution agents
* Generate sprint plans
* Monitor project progress
* Maintain overall project context

## Skills

* Requirement Analysis
* Task Planning
* Sprint Planning
* Workflow Management
* Project Coordination
* Risk Identification
* Progress Tracking

## Inputs

* User requests
* Project goals
* Existing tasks
* Agent status

## Outputs

* Task assignments
* Sprint plans
* Prioritized backlog
* Execution instructions

---

# OpenClaw (Execution Agent)

## Primary Responsibilities

* Implement assigned development tasks
* Generate source code
* Create backend APIs
* Build frontend components
* Update project files
* Resolve implementation issues

## Skills

* Laravel Development
* React Development
* REST API Development
* Database Integration
* Component Creation
* Code Refactoring
* Bug Fixing

## Inputs

* Hermes task assignments
* Project files
* Existing codebase

## Outputs

* Source code
* Updated files
* Completed tasks
* Implementation logs

---

# Human Supervisor

## Primary Responsibilities

* Review generated work
* Approve deployments
* Resolve conflicts
* Monitor agent performance
* Validate project quality

## Skills

* Decision Making
* Quality Assurance
* Architecture Review
* Deployment Management
* Project Oversight

---

# Dashboard Skills

The TaskForge dashboard provides:

* Agent Monitoring
* Task Assignment
* Kanban Board
* Activity Timeline
* Project Status
* Sprint Tracking
* System Health Monitoring

---

# Backend Skills

Framework:

* Laravel

Capabilities:

* REST APIs
* Database Management
* CRUD Operations
* Task Persistence
* Activity Logging
* Agent Management

---

# Frontend Skills

Framework:

* React + Vite

Capabilities:

* Interactive Dashboard
* Kanban Task Board
* Agent Status Cards
* Activity Feed
* Task Creation
* Task Movement
* Responsive Interface

---

# Communication Layer

Slack serves as the communication interface between the user and the multi-agent system.

Capabilities:

* Agent notifications
* Task updates
* Sprint discussions
* Collaboration

---

# Multi-Agent Workflow

User Request
↓
Hermes analyzes requirements
↓
Sprint plan generated
↓
Tasks assigned to OpenClaw
↓
OpenClaw implements features
↓
Activity recorded
↓
Human reviews results
↓
Deployment

---

# Automation Goals

TaskForge is designed to support:

* Automatic task generation
* Automatic activity logging
* Agent assignment
* Progress tracking
* Real-time monitoring
* Multi-agent collaboration

---

# Future Skills

* Autonomous planning
* AI-assisted code review
* Automated testing
* GitHub Pull Request generation
* Slack-driven task execution
* Performance analytics
* Intelligent workload balancing
* Multi-project orchestration
