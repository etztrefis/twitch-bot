module.exports = {
	Name: "join",
	Author: "trefis",
	Cooldown: 5000,
	Aliases: ["join"],
	Date: "",
	Description:
		"Bot joins to the channel, that indicated as argument of the command.",
	Code: async function join(database, ctx, client) {
		try {
			const data = await database.query(
				`SELECT * FROM Channels WHERE Channel = "${ctx}"`
			);
			if (data[0].length >= 1) {
				return `Already joined.`;
			} else {
				database.query(
					`INSERT INTO Channels (Channel) VALUES ("${ctx}")`
				);
				client.join(ctx);
				return `Done.`;
			}
		} catch (error) {
			console.log(error);
			return `Error monkaS`;
		}
	},
};
