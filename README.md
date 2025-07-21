# TechRange IT - Full-Stack Application
<img width="1896" height="861" alt="image" src="https://github.com/user-attachments/assets/339463b4-f33a-4375-91c2-1166530a2b25" />


This project is a complete full-stack web application built with a React frontend and a Node.js/Express backend.

## Architecture

- **Frontend**: A client-side React application built with TypeScript and styled with Tailwind CSS. It runs entirely in the browser using dependencies loaded from a CDN.
- **Backend**: A Node.js/Express server written in TypeScript that serves two main purposes:
    1. It serves the static frontend application files (HTML, CSS, JS).
    2. It provides secure API endpoints for the contact form and for the AI chat, keeping the Gemini API key safe on the server.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Setup and Installation

### 1. Backend Setup

First, navigate into the `server` directory and install the required npm packages.

```bash
cd server
npm install
```

### 2. Environment Variables

The backend needs your Google Gemini API key to function.

1.  In the `server` directory, create a new file named `.env`.
2.  Copy the contents from `.env.example` (if it exists) or create it with the following content.
3.  Paste your actual Gemini API key into the `.env` file.

**server/.env**
```
API_KEY="YOUR_GEMINI_API_KEY_HERE"
```

The server is configured to automatically load this key from the `.env` file. It will not be exposed to the frontend.

## Running the Application

Once you have installed the dependencies and set up your `.env` file, you can start the server.

From the `server` directory, run:

```bash
npm start
```

This command will:
- Compile the TypeScript backend code into JavaScript.
- Start the Express server on **port 3000**.

You can now open your web browser and navigate to:

[http://localhost:3000](http://localhost:3000)

Your full-stack application should be running. The frontend will be served by the backend, and the Contact Form and AI Chat Widget will communicate with your secure backend API.
