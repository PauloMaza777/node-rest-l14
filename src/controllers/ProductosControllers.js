const ProductosModel = require('../models/CategoriasModel');

class ProductosController
{
    static async indexGet(req,res)
    {
        let data = await ProductosModel.consultar();
        res.send(data);
    }
}

module.exports = ProductosController