// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
//const Product=require('./models/product');
const productRoutes = require('./routes/product');
const produitRoutes = require('./routes/produit');
const paletteRoutes = require('./routes/palette');
const Palette =require('./models/palette')
const Produit =require('./models/produit')
const sequelize = require('./util/database');
// configure app to use bodyParser()
// this will let us get the data from a POST
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 3200;        // set our port


// ROUTES FOR OUR API
// =============================================================================
Palette.hasMany(Produit);
Produit.belongsTo(Palette);
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(productRoutes);
app.use(produitRoutes);
app.use(paletteRoutes);

// START THE SERVER
// =============================================================================
sequelize
   // .sync({force :true})
     .sync()
    .then(result => {
        app.listen(port);
        console.log('Magic happens on port ' + port);
    }).catch(err => {
    console.log(err);})

