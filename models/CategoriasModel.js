const db = require('../dbconnection')

class CategoriasModel
{

    static async consultar()
    {
        let query= db('categorias');
        return await query;
    }

}

module.exports = CategoriasModel;