INSERT INTO Commands 

(
    Name,
    Author,
    Cooldown,
    Aliases, 
    Date, 
    Description,
    Code
)

VALUES

(
    "help",
	"trefis",
	10000,
	"help",
	"11/19/2020, 8:15:41 PM",
	"Posts description of command that indicated as argument.",
	"async function help(ctx) {
		try {
			require('dotenv').config({ path: '../../.env' });
			const { Sequelize, QueryTypes } = require('sequelize');

			const sequelize = new Sequelize(
				process.env.DBNAME,
				process.env.USER,
				process.env.PASS,
				{
					host: process.env.HOST,
					dialect: 'mysql',
				}
			);

			const query = await sequelize.query(
				`SELECT Description FROM Commands WHERE Name='${ctx}'`,
				{
					type: QueryTypes.SELECT,
				}
			);

			if (query.length > 0) {
				return `${query[0].Description}`;
			} else if (query.length >= 0) {
				return `Wrong command.`;
			}
		} catch (error) {
			return `Error`;
		}
	},"
)