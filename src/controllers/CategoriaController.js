const CategoriasModel = require('../models/CategoriasModel');

class CategoriasController
{
    static async indexGet(req,res)
    {
        let data = await CategoriasModel.consultar();
        res.send(data);
    }
}

module.exports = CategoriasController