const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { pageTitle: "Add Products", path: '/add-product' });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.productName });
  console.log(req.body.productName);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
