var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require('path');
var dataservice = require(__dirname + "/data-service.js");
onHttpStart = ()=>{
    console.log('Express http server listening on port ' + HTTP_PORT);
}
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + "/views/home.html"));
});

app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname + "/views/register.html"));
});

app.get('/signIn', (req, res)=>{
    res.sendFile(path.join(__dirname + "/views/signIn.html"));
});

app.use((req, res)=>{
    res.status(404).end('404 PAGE NOT FOUND');
});

dataservice.initialize().then(() => {
    app.listen(HTTP_PORT, onHttpStart());
}).catch (() => {
    console.log('promises not stisfied');
});