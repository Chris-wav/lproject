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
  } catch (e) {
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
      "explanation" "..."
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

router.post("/feedback", async (req, res) => {
  try {
    const { questions, userAnswers, champion, topic, difficulty } = req.body;

    // Κατασκευή score/total/wrongQuestions από τα raw data
    const score = questions.filter(
      (q: any, i: number) => q.correct === userAnswers[i],
    ).length;
    const total = questions.length;
    const wrongQuestions = questions
      .map((q: any, i: number) => ({ ...q, userAnswer: userAnswers[i] }))
      .filter((q: any) => q.userAnswer !== q.correct);

    const prompt = `You are a League of Legends coach. A player just completed a quiz.

Champion: ${champion}
Topic: ${topic}
Difficulty: ${difficulty}
Score: ${score}/${total}

${
  wrongQuestions.length > 0
    ? `Questions they got wrong:\n${wrongQuestions
        .map(
          (q: any) =>
            `- "${q.question}"\n  Correct answer: "${q.options[q.correct]}"\n  They answered: "${q.options[q.userAnswer]}"`,
        )
        .join("\n")}`
    : "They got everything correct!"
}

Give a short, encouraging coaching tip (2-3 sentences max). Be specific about what they got wrong if anything. Use a friendly, hype tone like a real LoL coach. Do not use markdown formatting.`;

    const content = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
    });

    const feedback = content.choices[0].message.content!;
    res.json({ feedback });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to generate feedback" });
  }
});

export default router;
