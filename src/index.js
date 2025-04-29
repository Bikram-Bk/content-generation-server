import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ContentGeneration from "./routes/content-generation.js"; 

dotenv.config(); // Load env variable
// console.log("Loaded API key:", process.env.GOOGLE_API_KEY,); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", ContentGeneration);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
