const db = require('../dbconnection')

class Productos_tiposModel
{

    static async consultar()
    {
        let query= db('productos_tipos');
        return await query;
    }

}

module.exports = Productos_tiposModel;