# Mega-Sena Web Simulator
## A modern, full-stack lottery simulation platform built with FastAPI and React.

### 📝 Project Overview
This project is a sophisticated web-based evolution of a classic computer science challenge. Originally specified as a procedural C-language terminal application, this version reimagines the Mega-Sena (Brazil's largest lottery) simulator as a distributed web system. It allows users to configure bets, generate "Surpresinhas" (random bets), manage "Teimosinhas" (multi-contest repetitions), and calculate costs in real-time, all while integrating with live lottery data.

###🚀 Key Features
Interactive Digital Wheel: A responsive UI for selecting numbers (01-60) with real-time validation.

Complex Betting Logic: Support for 6 to 15 numbers per bet, following official prize/cost scales.

Automated Betting: Implementation of "Surpresinha" and "Teimosinha" algorithms.

Live Data Integration: Fetches current contest numbers and prize pools from external Lottery APIs.

Financial Dashboard: Instant calculation of total investment vs. potential returns.

### 🛠️ Tech Stack
#### Backend:
<hr> 

Python / FastAPI: High-performance asynchronous API framework.

Pydantic: Strict data validation and settings management.

Ruff: Extremely fast Python linter and code formatter (handling import sorting and style).

#### Frontend:
<hr> 

React + Vite: Modern frontend tooling with TypeScript.

Mantine + Tailwind CSS: High-quality component library paired with utility-first styling.

React Query (TanStack Query): Server-state management for seamless API synchronization.

Axios: Promise-based HTTP client.

### 🧬 Architectural Shift
This repository demonstrates a transition from low-level procedural programming (C) to a modern decoupled architecture, focusing on:

Separation of Concerns: Business logic encapsulated in the FastAPI backend.

Reactive UX: A fluid, state-driven interface that replaces sequential terminal inputs.

Scalability: Ready for deployment using Nginx and Uvicorn.
