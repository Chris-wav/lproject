import axios from "axios";

const API_URL = "http://localhost:3000/api";

const generateQuiz = async (
  topic: string,
  champion: string,
  difficulty: string,
) => {
  try {
    const response = await axios.post(`${API_URL}/quiz`, {
      topic,
      champion,
      difficulty,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTagline = async (champion: string) => {
  try {
    const response = await axios.post(`${API_URL}/tagline`, { champion });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
