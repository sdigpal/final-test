var moongoose= require("mongoose");
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
mongoose.connect("Your connection string here");
var Schema = new Schema({
  "Email":{
    "type": string,
    "unique": true} ,
  "password": String
});

let finalUsers;
module.exports.startDB = function () {
    return new Promise(function (resolve, reject) {
        const db= mongoose.createconnection("mongodb+srv://senecaweb.rsbwdc7.mongodb.net/myFirstDatabase", {useNewUrlParser: true});
        db.on('error', function(err){
            console.log("Cannot connect to DB");    
        });
        db.once('open', function(){
            User = mongoose.model("finalUsers", new_Schema);
            console.log("DB connection successful.");
            resolve();
         });
     });
 };

