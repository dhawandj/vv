import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RefreshCw, Cpu, Activity } from 'lucide-react';
import { Message } from '../types';
import { getConstructionAdvice } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: 'SYSTEM INITIALIZED. Avinya Ventures AI Consultant active. Awaiting project parameters or estimation queries.',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await getConstructionAdvice(userMsg.text, history);
      
      const modelMsg: Message = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: Message = { role: 'model', text: "CONNECTION ERROR. Retrying connection to neural server...", timestamp: new Date() };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* HUD Container */}
      <div className="relative bg-black border border-neutral-800 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.1)]">
        
        {/* HUD Overlay Lines */}
        <div className="pointer-events-none absolute inset-0 z-20 border border-orange-900/30 m-2 rounded"></div>
        <div className="pointer-events-none absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-orange-500 z-20"></div>
        <div className="pointer-events-none absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-orange-500 z-20"></div>

        {/* Header */}
        <div className="bg-neutral-900/80 backdrop-blur border-b border-neutral-800 p-4 flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-3">
                <div className="relative">
                    <div className="bg-orange-600/20 p-2 rounded-full border border-orange-500/50 animate-pulse">
                        <Cpu className="text-orange-500 h-5 w-5" />
                    </div>
                </div>
                <div>
                    <h2 className="text-sm font-oswald font-bold text-white tracking-widest uppercase">Avinya AI Core</h2>
                    <div className="flex items-center text-[10px] text-green-500 uppercase tracking-wider">
                        <Activity className="h-3 w-3 mr-1" />
                        Online // Latency: 12ms
                    </div>
                </div>
            </div>
            {isLoading && <RefreshCw className="text-orange-500 animate-spin h-5 w-5" />}
        </div>

        {/* Chat Area */}
        <div className="h-[60vh] overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-neutral-950 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none"></div>
          
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[90%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                <div className={`flex-shrink-0 h-8 w-8 flex items-center justify-center border ${
                  msg.role === 'user' 
                  ? 'border-neutral-600 bg-neutral-800 ml-3' 
                  : 'border-orange-500 bg-orange-900/20 mr-3'
                }`}>
                  {msg.role === 'user' ? <User className="text-neutral-400 h-4 w-4" /> : <Bot className="text-orange-500 h-4 w-4" />}
                </div>
                
                {/* Message Bubble */}
                <div className={`p-4 border backdrop-blur-md ${
                  msg.role === 'user' 
                    ? 'bg-neutral-800/80 border-neutral-700 text-neutral-200' 
                    : 'bg-orange-950/30 border-orange-500/30 text-orange-100 shadow-[0_0_15px_rgba(234,88,12,0.1)]'
                }`}>
                  <div className="whitespace-pre-wrap text-sm font-mono leading-relaxed">
                    {msg.text}
                  </div>
                  <div className="text-[10px] mt-2 opacity-50 uppercase tracking-widest text-right">
                    T-{msg.timestamp.toLocaleTimeString([], {hour12: false})}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-neutral-900 border-t border-neutral-800 relative z-10">
          <form onSubmit={handleSendMessage} className="flex gap-0">
            <div className="relative flex-1">
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Initialize Query..."
                className="w-full h-12 bg-black border border-neutral-700 border-r-0 text-white px-4 font-mono text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-600"
                disabled={isLoading}
                />
                {/* Typing cursor animation decoration */}
                <div className="absolute right-2 top-3 w-2 h-6 bg-orange-500 animate-pulse opacity-50 pointer-events-none"></div>
            </div>
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-orange-600 hover:bg-orange-500 disabled:bg-neutral-800 text-black font-bold px-6 h-12 uppercase tracking-wider transition-all flex items-center justify-center border border-orange-600 hover:shadow-[0_0_15px_rgba(234,88,12,0.5)]"
            >
              <Send className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Transmit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;