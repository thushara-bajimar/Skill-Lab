import { GoogleGenAI } from "@google/genai"


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})


export async function POST(request) {


    try {


        const { message } = await request.json()


        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: message
        })


        const reply = response.text


        return Response.json({
            reply: reply
        })


    } catch (error) {


        console.log(error)
        return Response.json(
            { error: error.message },
            { status: 500 }
        )


    }
}




