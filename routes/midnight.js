const express = require("express");
const router = express.Router();
const { GetAllProducts, GetAllProductTesting } = require("../controller/midnight");

router.get("/", GetAllProducts);
router.get("/testing", GetAllProductTesting);

module.exports = router; 