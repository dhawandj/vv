import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are an expert Senior Construction Project Manager and Consultant for Avinya Ventures. 
Your goal is to assist potential clients by estimating rough project scopes, suggesting materials, explaining construction processes, and providing safety advice.

Guidelines:
1. Be professional, safety-conscious, and encouraging.
2. When asked about costs, provide rough estimates but ALWAYS state that this is a "preliminary estimate" and they should contact Avinya Ventures for a formal quote.
3. If users ask for illegal or unsafe construction practices, politely refuse and explain the safety/legal risks.
4. Keep responses concise (under 200 words) and formatted with bullet points for readability on mobile devices.
5. End helpful responses by encouraging them to book a consultation with Avinya Ventures.
6. You are knowledgeable about residential, commercial, and industrial construction.

Tone: Professional, Reliable, Experienced.
`;

export const getConstructionAdvice = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the full history for context
    const chat = ai.chats.create({
        model: model,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history
    });

    const result = await chat.sendMessage({
        message: userMessage
    });

    return result.text;

  } catch (error) {
    console.error("Error fetching AI advice:", error);
    return "I apologize, but I'm having trouble connecting to the construction database right now. Please try again in a moment or contact our office directly.";
  }
};