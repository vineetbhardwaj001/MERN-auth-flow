const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http"); // 🔧 Required for creating the server

// Load env variables
dotenv.config();

const app = express();
const server = http.createServer(app); // ✅ Define `server`

app.use(express.json());
app.use(cors({
  origin: "https://hook-ai-henna.vercel.app", // 👈 your frontend Vite port
  credentials: true
}));

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("🎸 Auth System & Chord Analysis Server Runnings");
});

// MongoDB connection and server start
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("✅ MongoDB Connected");
    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err));
