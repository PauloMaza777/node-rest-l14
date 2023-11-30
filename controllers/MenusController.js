const MenuModel = require('../models/MenuModel');

class MenusController
{
    static async indexGet(req,res)
    {
        let data = await MenuModel.consultar();
        res.send(data);
    }
    static async itemGet(req,res){

        let id = req.params.id;
        let data = await MenuModel.consultarPorId(id);
        if(data.length > 0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({error: 'Not Found'});
    }
}

module.exports = MenusController