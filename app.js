
const express = require('express');
const app = express();
const puerto = 80;

app.get('/',function(req, res){

    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.send('Hola Mundo!');

});

app.listen(puerto, function(){

    console.log('servidor iniciado')
});