const path = require("path");

const express = require("express");
//const rootDir = require("../util/path");
const router = express.Router();

const productsController = require('../controllers/products');

const adminData = require("./admin");

router.get("/", productsController.getAddedProducts);

module.exports = router;
