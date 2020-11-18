require("dotenv").config({ path: "../.env" });
const { Sequelize, QueryTypes } = require("sequelize");
const fs = require("fs");

const dir = "./commands";

const sequelize = new Sequelize(
	process.env.DBNAME,
	process.env.USER,
	process.env.PASS,
	{
		host: process.env.HOST,
		dialect: "mysql",
	}
);

(async () => {
	await sequelize.query("DELETE FROM Commands", { type: QueryTypes.DELETE });

	fs.readdir(dir, async (error, files) => {
		if (error) console.error(error);
		for (let i = 0; i < files.length; i++) {
			fs.readFile(`${dir}/${files[i]}`, "utf8", async (err, data) => {
				if (err) console.error(err);
				await sequelize
					.query(data, {
						type: QueryTypes.INSERT,
					})
					.catch((err) => {
						console.error(err);
					});
			});
		}
	});
})();
