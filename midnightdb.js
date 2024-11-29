require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/midnight");
const ProductJson = require("./midnight.json");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url); 
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany(); 
    await Product.create(ProductJson); 
    console.log("Data import success");
    process.exit(0);
  } catch (error) {
    console.error("Data import error:", error);
    process.exit(1);
  }
};

start();