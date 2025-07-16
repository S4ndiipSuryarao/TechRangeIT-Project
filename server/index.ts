import express from 'express';
import cors from 'cors';
import * as path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Chat, Content } from "@google/genai";

// Load environment variables from .env file in the current directory (server/)
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// --- Define Root Paths ---
// __dirname is a global variable in CommonJS Node.js environments, pointing to the current script's directory.
// This is the correct way to get the directory path in a project configured with "module": "commonjs".

// This logic robustly finds the project root from both dev and prod environments.
// In dev (ts-node-dev), __dirname is .../project/server
// In prod (node dist/index.js), __dirname is .../project/server/dist
const isProd = __dirname.endsWith('dist');
const projectRoot = isProd ? path.resolve(__dirname, '..', '..') : path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable parsing of JSON bodies

// --- Static File Serving ---
// Serve static files from the 'public' directory (for images, videos, etc.)
app.use(express.static(publicDir));
// Serve static files from the root of the project to serve the frontend files (index.html, components etc.)
app.use(express.static(projectRoot));

// --- API Routes ---

// 1. Contact Form Endpoint
app.post('/api/contact', (req: express.Request, res: express.Response) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log('------------------------------------');

    res.status(200).json({ success: true, message: 'Message received successfully!' });
});


// 2. Gemini Chat Proxy Endpoint (Streaming)
app.post('/api/chat', async (req: express.Request, res: express.Response) => {
    const { history, message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'A message is required.' });
    }
    if (!process.env.API_KEY) {
        return res.status(500).json({ error: 'API key is not configured on the server.' });
    }

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const systemInstruction = "You are a friendly and professional AI assistant for TechRange IT, a leading technology solutions provider. Your goal is to answer user questions about our services, process, and company. Our services include: Application Development, Cloud Solutions, Data & Analytics, Cybersecurity, Mobile App Development, and IT Support. Our process is: Discover, Design, Develop, Deploy. Be concise, helpful, and use markdown for formatting if needed.";
        
        const initialHistory = history.slice(0, -1);

        const chatHistory: Content[] = (initialHistory || []).map((msg: {sender: string, text: string}) => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        const chat: Chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: { systemInstruction },
            history: chatHistory
        });

        const responseStream = await chat.sendMessageStream({ message });

        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.setHeader('Transfer-Encoding', 'chunked');

        for await (const chunk of responseStream) {
            res.write(chunk.text);
        }
        res.end();

    } catch (error) {
        console.error('Error with Gemini API:', error);
        res.status(500).send('An error occurred while communicating with the AI assistant.');
    }
});


// Catch-all route to serve index.html for any other request, supporting client-side routing.
app.get('*', (req: express.Request, res: express.Response) => {
    // This prevents serving index.html for missing assets that have a file extension.
    if (path.extname(req.path).length > 0) {
        return res.status(404).send('Not found');
    }
    res.sendFile(path.resolve(projectRoot, 'index.html'));
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    console.log(`Serving files from project root: ${projectRoot}`);
    console.log(`Serving public assets from: ${publicDir}`);
});