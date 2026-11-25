import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `You are a helpful, general-purpose AI assistant. Answer clearly and accurately across a wide range of topics. If a request is ambiguous, ask a clarifying question. Be honest when you are uncertain.`;

export async function POST(request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return Response.json(
        { error: "The chatbot is not configured. Add GEMINI_API_KEY to the server environment." },
        { status: 500 },
      );
    }

    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "At least one message is required." }, { status: 400 });
    }

    const contents = messages
      .filter(message =>
        (message.role === "user" || message.role === "model") &&
        typeof message.text === "string" &&
        message.text.trim(),
      )
      .slice(-20)
      .map(message => ({
        role: message.role,
        parts: [{ text: message.text }],
      }));

    if (contents.length === 0 || contents[contents.length - 1].role !== "user") {
      return Response.json({ error: "A valid user message is required." }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });

    const reply = response.text || "I couldn't generate a response. Please try again.";

    return Response.json({ reply });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error.message || "The AI request failed." }, { status: 500 });
  }
}
