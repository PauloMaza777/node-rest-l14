const MenuModel = require('../models/MenuModel');

class MenusController
{
    static async indexGet(req,res)
    {
        let data = await MenuModel.consultar();
        res.send(data);
    }
}

module.exports = MenusController