const db = require('../dbconnection')

class MenuModel
{

    static async consultar()
    {
        let query= db('menus');
        return await query;
    }

}

module.exports = MenuModel;