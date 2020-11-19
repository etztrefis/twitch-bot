module.exports = {
	Name: "commands",
	Author: "trefis",
	Cooldown: 10000,
	Aliases: ["commands", "comms"],
	Date: "11/19/2020, 7:48:44 PM",
	Description: "Posts all available commands of feelsokayegbot.",
	Code: async function commands() {
		try {
			require("dotenv").config({ path: "../../.env" });
			const { Sequelize, QueryTypes } = require("sequelize");

			const sequelize = new Sequelize(
				process.env.DBNAME,
				process.env.USER,
				process.env.PASS,
				{
					host: process.env.HOST,
					dialect: "mysql",
				}
			);

			const query = await sequelize.query("SELECT Name FROM Commands", {
				type: QueryTypes.SELECT,
			});

			const response = [];
			if (query.length > 0) {
				query.forEach((value, index) => {
					response.push(query[index].Name);
				});
				return `Available commands: ${response.join(", ")}.`;
			} else {
				return `Response from database is NULL. monkaS`;
			}
		} catch (error) {
			return `Error`;
		}
	},
};
