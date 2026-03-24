import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "What is the address, phone number, operating hours, and any other publicly available information for 'Little Flamingos Daycare' in Cape Town, South Africa?",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    console.log(response.text);
  } catch (e) {
    console.error(e);
  }
}

run();
