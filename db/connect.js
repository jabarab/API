const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    // Remove the deprecated options
    await mongoose.connect(uri); // No need to pass useNewUrlParser and useUnifiedTopology anymore
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;