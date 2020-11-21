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
    "leave",
	"trefis",
	5000,
	"leave",
	"11/21/2020, 11:50:48 PM",
	"Bot leaves from the channel, that indicated as argument of the command.",
	"async function join(database, ctx, client) {
		try {
			const data = await database.query(
				`SELECT * FROM Channels WHERE Channel = '${ctx}'`
			);
			if (data[0].length >= 1) {
				try {
					client.part(ctx);
				} catch (error) {
					console.log('Error: timed out Okayeg');
				}
				await database.query(
					`DELETE FROM Channels WHERE Channel = '${ctx}'`
				);
				return `Parted. TriHard 7`;
			} else {
				return `.`;
			}
		} catch (error) {
			console.log(error);
			return `Error monkaS`;
		}
	},"
)