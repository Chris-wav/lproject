import { Router } from "express";
import * as dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const router = Router();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });

router.post("/feedback", async (req, res) => {
  try {
    const { topic, champion, difficulty, correct, total, wrongQuestions } =
      req.body;
    const prompt = `
  You are a brutally honest but funny League of Legends coach.
  The player just completed a quiz about ${topic} with champion ${champion}.
  They got ${correct} out of ${total} questions right.
  They struggled with: ${wrongQuestions.join(", ")}.
  You should also try to teach him the wrong things he answered.

  Give them short, sharp coaching feedback. Be sarcastic and funny but not mean.
  Max 6 sentences. No cringe. Talk like a real LoL player would.
`;
    const content = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
    });
    const text = content.choices[0].message.content!;
    const clean = text.replace(/```json|```/g, "").trim();

    res.json({ feedback: clean });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to generate quiz" });
  }
});
export default router;
