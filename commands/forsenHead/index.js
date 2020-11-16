module.exports = {
	Name: "forsenHead",
	Author: "trefis",
	Cooldown: 5000,
	Aliases: ["yourmom", "forsenhead", "mom"],
	Date: "11/6/2020, 6:45:40 PM",
	Description: "Posts random joke about your mom.",
	Code: async function forsenHead() {
		const axios = require("axios").default;
		const { data } = await axios({
			method: "get",
			url: `https://trefis.net/mom_jokes.json`,
			responseType: "json",
		});

		const values = Object.values(data.data);
		const random = Math.floor(Math.random() * values.length);
		const radomValue = values[random];
		return `${radomValue} forsenHead`;
	},
};
