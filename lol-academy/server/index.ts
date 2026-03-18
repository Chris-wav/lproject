process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import groqQuestions from "./routes/groqRoute";
import groqFeedback from "./routes/feedbackRoute";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use("/api", groqQuestions);
app.use("/api", groqFeedback);

app.get("/", (req, res) => {
  res.json({ message: "Lol academy server is running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
