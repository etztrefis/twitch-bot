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
    "userid",
	"trefis",
	3000,
	"uid, userid, id",
	"11/1/2020, 5:03:59 PM",
	"Posts twitch user`s id.",
	"async function userid(user) {
		try {
			const axios = require('axios').default;
			require('dotenv').config({ path: '../../.env' });
			const { data } = await axios({
				method: 'get',
				url: `https://api.twitch.tv/helix/users?login=${user}`,
				responseType: 'json',
				headers: {
					'Client-Id': process.env.KEYVALUE,
					Authorization: process.env.BEARER,
				},
			});
			return data.data == ''
				? `User doesnt exists.`
				: `id: ${data.data[0]['id']}`;
		} catch (error) {
			return `Bad request. 404 Okayeg`;
		}
	},"
)
