module.exports = {
	Name: "repos",
	Author: "trefis",
	Cooldown: 15000,
	Aliases: ["reps", "repos"],
	Date: "10/16/2020, 10:04:56 AM",
	Description:
		"Posts all public repositories of user that indicated as argument.",
	Code: async function repos(user) {
		try {
			const axios = require("axios").default;
			const { data } = await axios({
				method: "get",
				url: `https://api.github.com/users/${user}/repos`,
				responseType: "json",
			});
			const messages = (data || []).map(function (repoData) {
				return ` ${repoData.name}`;
			});

			return messages == ""
				? `That user doesn't have any repositories.`
				: messages.join();
		} catch (error) {
			return `The response from server is: 404 Not Found. Probably user doesnt exists. monkaS`;
		}
	},
};
