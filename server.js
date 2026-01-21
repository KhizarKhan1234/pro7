const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello World! Server is running 🚀");
});

// Random number API
app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({
    success: true,
    number: randomNumber
  });
});

// Server port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
