const Product = require("../models/products");

//const products = []; //handled by model

exports.getProducts = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Products",
    path: "/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const addProduct = new Product(req.body.productName);
  addProduct.save();
  //products.push({ title: req.body.productName }); //handled by model
  //console.log(req.body.productName); //handled by model
  res.redirect("/");
};

exports.getAddedProducts = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  const getAddedProducts = Product.fetchAll();
  console.log("Shop File ", getAddedProducts);
  res.render("shop", {
    prods: getAddedProducts,
    pageTitle: "Shop",
    path: "/",
    hasProducts: getAddedProducts.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
