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
    "repos",
	"trefis",
	15000,
	"reps, repos",
	"10/16/2020, 10:04:56 AM",
    "Posts all public repositories of user that indicated as argument.",
	"async function repos(user) {
		try {
			const axios = require('axios').default;
			const { data } = await axios({
				method: 'get',
				url: `https://api.github.com/users/${user}/repos`,
				responseType: 'json',
			});
			const messages = (data || []).map(function (repoData) {
				return ` ${repoData.name}`;
			});

			return messages == ''
				? `That user doesn't have any repositories.`
				: messages.join();
		} catch (error) {
			return `The response from server is: 404 Not Found. Probably user doesnt exists. monkaS`;
		}
	},"
)


