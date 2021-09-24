const express = require('express');
const app  = express();



app.get("/", function(req,res){
    res.send("Seja bem vindo ao index!")

});

app.get("/teste", function(req,res){

    var requesteste = require("./teste");
    res.sendFile(teste.js)
    module.exports = teste;
});

app.get("/blog", function(req,res){
    res.send("Bem vindo ao blog");

});

app.get("/ola/:cargo/:nome", function(req,res){
    res.send(req.params);

});

app.listen(8081,function()
{
    console.log("Servidor rodando na url http://localhost:8081")
});//localhost:8081
    


  