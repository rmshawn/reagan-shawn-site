import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_INSTRUCTIONS, INITIAL_GREETING } from '../portfolioData';

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // We use a Ref for messages to ensure the API always has access to the latest history
  // even when triggered by an external event listener
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: INITIAL_GREETING }
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  
  // Ref to track messages state inside the event listener closure
  const messagesRef = useRef(messages);
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  // Initialize Gemini
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // --- UPDATED SEND FUNCTION ---
  // Now accepts an optional 'manualText' argument.
  // If manualText is provided, it uses that. If not, it uses the 'input' state.
  const handleSend = async (manualText?: string) => {
    const textToSend = typeof manualText === 'string' ? manualText : input;

    if (!textToSend.trim() || isLoading) return;

    // Clear input only if we sent from the input bar
    if (!manualText) setInput('');
    
    // Add User Message to UI
    const newUserMsg = { role: 'user' as const, text: textToSend };
    setMessages(prev => [...prev, newUserMsg]);
    setIsLoading(true);

    try {
      // 1. Setup the Model
      const model = genAI.getGenerativeModel({
        model: "gemini-flash-latest",
        systemInstruction: SYSTEM_INSTRUCTIONS
      });

      // 2. Prepare History
      // We use messagesRef.current to ensure we have the latest history + the new message
      const currentHistory = messagesRef.current.map(m => 
        m.role === 'user' ? `User: ${m.text}` : `You: ${m.text}`
      );

      // 3. Send to Gemini
      const result = await model.generateContent([
        ...currentHistory,
        `User: ${textToSend}`
      ]);

      const response = result.response.text();

      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to my cognitive center right now. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  // --- NEW: EVENT LISTENER FOR 'Learn More' BUTTONS ---
  useEffect(() => {
    const handleTriggerChat = (event: Event) => {
      const customEvent = event as CustomEvent;
      const prompt = customEvent.detail;
      
      if (prompt) {
        setIsOpen(true); // Open the window
        handleSend(prompt); // Auto-send the message
      }
    };

    window.addEventListener('triggerChat', handleTriggerChat);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('triggerChat', handleTriggerChat);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 bg-teal text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-midnight/10 animate-fade-in-up">
          
          {/* Header */}
          <div className="bg-midnight p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-teal" />
              <span className="font-heading tracking-wide">Reagan AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-teal transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cloud/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-midnight text-white rounded-tr-none' 
                    : 'bg-white border border-midnight/10 text-midnight/80 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-midnight/10 shadow-sm flex gap-1">
                  <div className="w-2 h-2 bg-teal rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-teal rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-teal rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-midnight/5">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-cloud/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading}
                className="bg-teal text-white p-2 rounded-full hover:bg-midnight transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;