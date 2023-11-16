const db = require('../dbconnection')

class ProductosModel
{

    static async consultar()
    {
        let query= db('productos');
        return await query;
    }

}

module.exports = ProductosModel;