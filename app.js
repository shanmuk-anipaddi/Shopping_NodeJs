const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

//const expressHbs = require('express-handlebars');

const app = express();

const adminData = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");

//Tell Express use this Template
//Pug
// app.engine('pug', require('pug').__express);
// app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));

//Handlebars

//app.engine('handlebars',expressHbs.engine({layoutsDir:'views',extname:'handlebars'}));
// app.set('view engine','handlebars');
// app.set('views',path.join(__dirname, "views"));

//EJS
app.set('view engine','ejs');
app.set('views',path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//app.use("./admin", adminRoutes);
app.use(adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
