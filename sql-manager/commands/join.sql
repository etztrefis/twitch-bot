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
    "join",
	"trefis",
	5000,
	"join",
	"11/21/2020, 11:31:07 PM",
	"Bot joins to the channel, that indicated as argument of the command.",
	"async function join(database, ctx, client) {
		try {
			const data = await database.query(
				`SELECT * FROM Channels WHERE Channel = '${ctx}'`
			);
			if (data[0].length >= 1) {
				return `Already joined.`;
			} else {
				database.query(
					`INSERT INTO Channels (Channel) VALUES ('${ctx}')`
				);
				client.join(ctx);
				return `Done.`;
			}
		} catch (error) {
			console.log(error);
			return `Error monkaS`;
		}
	},"
)