import axios from "axios";
import type { Question } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000/api";

interface getFeedbackFromAiProps {
  questions: Question[];
  userAnswers: number[];
  champion: string;
  topic: string;
  difficulty: string;
}

export const getFeedbackFromAi = async ({
  questions,
  userAnswers,
  champion,
  topic,
  difficulty,
}: getFeedbackFromAiProps): Promise<string> => {
  const res = await axios.post(`${API_URL}/feedback`, {
    questions,
    userAnswers,
    champion,
    topic,
    difficulty,
  });
  return res.data.feedback; // 👈 επιστρέφουμε το string απευθείας
};
