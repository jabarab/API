const Product = require("../models/midnight");

const GetAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

// Testing route (optional)
const GetAllProductTesting = (req, res) => {
  res.send("This is a test route");
};

module.exports = { GetAllProducts, GetAllProductTesting };