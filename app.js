const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

//const expressHbs = require('express-handlebars');

const app = express();

const adminRoutes = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");

//Import Controller
const errorController = require('./controllers/error');
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
app.use(adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
