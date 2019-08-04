var Datastore = require("nedb");
var path = require("path");
var db = {
  products: new Datastore({
    filename: path.join(__dirname,"db","products"),
    autoload: true
  }), 
  
  categories: new Datastore({
    filename: path.join(__dirname,"db","categories"),
    autoload: true
  }),

  users: new Datastore({
    filename: path.join(__dirname,"db","users"),
    autoload: true
  }),


   
};

module.exports = db;
