const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("public"));
var Final = require('./final.js');
const port = process.env.PORT || 8080;
function onhttp(){
  console.log("Express http server listening on port",port);
}
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, '/finalViews/home.html'));
});
app.get("/register", function(req,res){
  res.sendFile(path.join(__dirname, '/finalViews/register.html'));
});

app.post("/register",(req, res) => {
    final.registerUser(req.body).then(() =>{
     res.send(data.email <br> <a href ="/home">Go home</a>);
    }).catch(err => res.render({message: "Error"}));
  
  });
  
app.get("/signIn", function(req,res){
  res.sendFile(path.join(__dirname, '/finalViews/signIn.html'));
});

app.post("/signIn",(req, res) => {
  final.signIn().then(() =>{
  }).catch(err => res.render({message: "Error"}));

})
  app.use((req, res) => {
    res.status(404).send("Page Not Found");
  });

  final.startDB()
  .then(final.startDB)
  .then(function () {
    app.listen(port, onhttp);
   })
   .catch(function (err) {
     console.log('Failed to start!' + err);
   });