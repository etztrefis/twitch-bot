module.exports = {
	Name: "leave",
	Author: "trefis",
	Cooldown: 5000,
	Aliases: ["leave"],
	Date: "",
	Description:
		"Bot leaves from the channel, that indicated as argument of the command.",
	Code: async function join(database, ctx, client) {
		try {
			const data = await database.query(
				`SELECT * FROM Channels WHERE Channel = "${ctx}"`
			);
			if (data[0].length >= 1) {
				try {
					client.part(ctx);
				} catch (error) {
					console.log("Error: timed out Okayeg");
				}
				await database.query(
					`DELETE FROM Channels WHERE Channel = "${ctx}"`
				);
				return `Parted. TriHard 7`;
			} else {
				return `.`;
			}
		} catch (error) {
			console.log(error);
			return `Error monkaS`;
		}
	},
};
