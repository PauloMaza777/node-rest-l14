const db = require('../dbconnection')

class MenuModel
{

    static async consultar()
    {
        let query= db('menus');
        return await query;

    }

    static async consultarPorId(id){

        return await db('menus').where('id_menu',id);
    }

    static async insertar(menu){
        return await db('menu').insert(menu);
    }

    static async indexPost(req,res){

        let data = {
            'nombre': req.body.nombre
        };
        await MenuModel.insertar(data);
    }
}

module.exports = MenuModel;