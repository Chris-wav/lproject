import { Router } from "express";
import * as dotenv from "dotenv";
import Groq from "groq-sdk";
dotenv.config();

const router = Router();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });

console.log("API KEY:", process.env.GEMINI_API_KEY);

router.post("/tagline", async (req, res) => {
  try {
    const { champion } = req.body;
    const prompt = `You are ${champion} from League of Legends.
Write ONE brutal, witty one-liner (max 10 words) to shame a player into logging in and practicing.
No motivational speech. No cringe. Pure character. Think Twitter roast.`;
    const content = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
    });
    const text = content.choices[0].message.content!;
    res.json({ tagline: text });
  } catch (error) {
    res.status(500).json({ error: "Failed to edge the user" });
  }
});

router.post("/quiz", async (req, res) => {
  try {
    const { topic, champion, difficulty } = req.body;

    const prompt = `
  Generate 10 multiple choice questions about ${topic} in League of Legends.
  Champion: ${champion || "general"}.
  Difficulty: ${difficulty || "beginner"}.

  Return ONLY a JSON array, no extra text:
  [
    {
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "correct": 0
    }
  ]
`;

    const content = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
    });
    const text = content.choices[0].message.content!;

    const clean = text.replace(/```json|```/g, "").trim();
    const groqJson = JSON.parse(clean);
    res.json({ questions: groqJson });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Failed to generate quiz" });
  }
});

export default router;
