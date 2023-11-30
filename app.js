
const express = require('express');
const app = express();
const puerto = 80;

const MenusController = require('./controllers/MenusController');
const CategoriasController = require('./controllers/CategoriaController');
const ProductosController = require('./controllers/ProductosControllers');
const Productos_tiposController = require('./controllers/Productos_tiposControllers');

app.use(express.json());
app.get('/menus',MenusController.indexGet);
app.get('/menus/:id([0-9]+)', MenusController.itemGet);
app.get('/categorias',CategoriasController.indexGet);
app.get('/productos',ProductosController.indexGet);
app.get('/productos_tipos',Productos_tiposController.indexGet);
app.get('/',function(req, res){

    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.send('Hola Mundo!');

});

app.listen(puerto, function(){

    console.log('servidor iniciado')
});