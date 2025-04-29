import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDJ5iw6Rign7-AmRJ67k2GFdHQKeLglLUY" });
// const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export const getContent = async (text) => {
    const formattedPrompt = `${text}
  
  Structure your response as follows:
  
  1. Introduction
  [Write an engaging introduction here]
  
  2. Main Points
  - [Point 1]
  - [Point 2]
  - [Point 3]
  - [Point 4]
  - [Point 5]
  - [Point 6]
  
  3. Conclusion
[Write a concise conclusion here]

Important Instructions:
- DO NOT use headings (##) or bold (**).
- Keep the numbering (1., 2., 3.) exactly as shown.
- Write clean plain text.`;
  
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: formattedPrompt,
    });
    return response.text;
  };
