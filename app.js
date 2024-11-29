require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const productRoutes = require("./routes/midnight");

const app = express();
const PORT = process.env.PORT || 5004;

// Connect to MongoDB
connectDB(process.env.MONGODB_URL);

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Basic route to check server status
app.get("/", (req, res) => {
  res.send("I am live");
});

// Use the product routes
app.use("/api/midnight", productRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});