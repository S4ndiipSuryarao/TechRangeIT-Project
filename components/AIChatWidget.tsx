
import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import SparklesIcon from './icons/SparklesIcon';
import XIcon from './icons/XIcon';
import SendIcon from './icons/SendIcon';

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

export interface AIChatWidgetRef {
    openWithPrompt: (prompt: string) => void;
}

const AIChatWidget = forwardRef<AIChatWidgetRef, {}>((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'ai', text: 'Hello! How can I help you learn about TechRange IT today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        openWithPrompt(prompt: string) {
            setIsOpen(true);
            // Use a timeout to ensure the chat modal is open before sending
            setTimeout(() => {
                handleSendMessage(prompt);
            }, 100);
        }
    }));

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (messageToSend?: string) => {
        const currentInput = messageToSend || input;
        if (!currentInput.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: currentInput };
        const newMessages = [...messages, userMessage];
        
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        // Add a placeholder for the AI response immediately
        setMessages(prev => [...prev, { sender: 'ai', text: '...' }]);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    history: newMessages, // Send the conversation history
                    message: currentInput,
                }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }

            // Handle the streaming response
            const reader = response.body?.getReader();
            if (!reader) {
                throw new Error('Failed to get response reader');
            }
            
            const decoder = new TextDecoder();
            let streamedText = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                streamedText += decoder.decode(value, { stream: true });
                setMessages(prev => {
                    const updatedMessages = [...prev];
                    updatedMessages[updatedMessages.length - 1] = { sender: 'ai', text: streamedText };
                    return updatedMessages;
                });
            }

        } catch (error) {
            console.error('Error sending message to backend:', error);
            setMessages(prev => {
                 const newMessages = [...prev];
                 newMessages[newMessages.length - 1] = { sender: 'ai', text: 'Sorry, I encountered an error. Please try again.' };
                 return newMessages;
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[1000]">
            <div className={`
                fixed bottom-[calc(1rem+4.5rem)] right-4 md:bottom-[calc(2rem+4.5rem)] md:right-8
                w-[90vw] max-w-md h-[70vh] max-h-[500px]
                bg-white rounded-xl shadow-2xl
                flex flex-col overflow-hidden
                transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 transform scale-100 pointer-events-auto' : 'opacity-0 transform scale-95 pointer-events-none'}
            `}>
                <header className="flex items-center justify-between p-4 bg-corporate-blue text-white shadow-md flex-shrink-0">
                    <h3 className="font-bold text-lg">TechRange AI Assistant</h3>
                    <button onClick={() => setIsOpen(false)}><XIcon /></button>
                </header>
                <div className="chat-body flex-1 p-4 space-y-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`chat-message ${msg.sender}`}>{msg.text}</div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <footer className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
                    <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={"Ask a question..."}
                            className="w-full bg-light-gray-bg text-dark-text p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-corporate-blue disabled:bg-gray-200"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="bg-corporate-blue text-white p-2 rounded-md hover:bg-accent-teal disabled:opacity-50 transition-colors">
                           <SendIcon />
                        </button>
                    </form>
                </footer>
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-gradient-to-r from-accent-teal to-corporate-blue text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Toggle AI Assistant"
            >
                {isOpen ? <XIcon /> : <SparklesIcon />}
            </button>
        </div>
    );
});

export default AIChatWidget;