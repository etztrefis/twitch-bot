const { Sequelize } = require("sequelize");
const { QueryTypes }
const options = require("../options.js")

const sequelize = new Sequelize(options.dbname, options.user, options.pass, {
    host: options.host,
    dialect: options.dialect
})

async function borobushe_loh() {
    let arg = "ping";
    const query = await sequelize.query('SELECT * FROM Commands WHERE Name = ')

}