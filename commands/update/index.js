module.exports = {
	Name: "update",
	Author: "trefis",
	Cooldown: 5000,
	Aliases: ["update"],
	Date: "11/22/2020, 12:58:41 AM",
	Description:
		"Updating all info about commands from sql files in repo to database. ",
	Code: async function update(database) {
		try {
			const fs = require("fs");

			await database.query("DELETE FROM Commands");
			const dir = "./sql-manager/commands";

			fs.readdir(dir, async (error, files) => {
				if (error) console.error(error);
				for (let i = 0; i < files.length; i++) {
					fs.readFile(
						`${dir}/${files[i]}`,
						"utf8",
						async (err, data) => {
							if (err) console.error(err);
							await database.query(data).catch((err) => {
								console.error(err);
							});
						}
					);
				}
			});
			return `Up to date Okayeg 7`;
		} catch (error) {
			console.log(error);
			return `Error monkaS`;
		}
	},
};
