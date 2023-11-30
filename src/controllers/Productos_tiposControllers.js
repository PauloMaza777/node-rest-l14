const Productos_tiposModel = require('../models/CategoriasModel');

class Productos_tiposController
{
    static async indexGet(req,res)
    {
        let data = await Productos_tiposModel.consultar();
        res.send(data);
    }
}

module.exports = Productos_tiposController 