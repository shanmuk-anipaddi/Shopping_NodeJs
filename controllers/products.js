const products = [];

exports.getProducts = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Products",
    path: "/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.productName });
  console.log(req.body.productName);
  res.redirect("/");
};
