const http = require('http');

const puerto = 80;

const servidor = http.createServer(function(req, res){

    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Hola Mundo!');

});

servidor.listen(puerto, function(){

    console.log('servidor iniciado')
});