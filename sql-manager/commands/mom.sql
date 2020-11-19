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
    "mom",
	"trefis",
	5000, 
	"yourmom, forsenhead, mom",
	"11/6/2020, 6:45:40 PM",
	"Posts random joke about your mom. You can use it with user as second argument.",
	"async function forsenHead() {
		const axios = require('axios').default;
		const { data } = await axios({
			method: 'get',
			url: `https://trefis.net/mom_jokes.json`,
			responseType: 'json',
		});

		const values = Object.values(data.data);
		const random = Math.floor(Math.random() * values.length);
		const radomValue = values[random];
		return `${radomValue} forsenHead`;
	},"
)


