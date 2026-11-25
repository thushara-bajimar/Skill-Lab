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

    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "The request body must be valid JSON." }, { status: 400 });
    }

    const { messages } = body ?? {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "At least one message is required." }, { status: 400 });
    }

    if (messages.length > 100) {
      return Response.json({ error: "Too many messages were sent." }, { status: 400 });
    }

    const contents = messages
      .filter(message =>
        message &&
        (message.role === "user" || message.role === "model") &&
        typeof message.text === "string" &&
        message.text.trim() &&
        message.text.length <= 4000,
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
    return Response.json(
      { error: "The AI service could not complete your request. Please try again." },
      { status: 502 },
    );
  }
}
