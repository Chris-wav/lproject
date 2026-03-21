export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: string;
  scenario: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  difficulty: "beginner" | "intermediate";
}

export interface Category {
  id: string;
  title: string;
  lessons: Lesson[];
  icon: string;
  description: string;
}

export interface AIQuestion {
  question: string;
  options: string[];
  correct: number;
}
