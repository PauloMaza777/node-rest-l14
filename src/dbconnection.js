const knex = require('knex');
const db = knex({
    client: 'mysql2',
    connection: {
        host: 'mysql', //Nombre del sevicio en el docker.compose.yml
        user: 'user_restaurante',
        password: '54321',
        database: 'restaurante'
    }
});
module.exports = db;