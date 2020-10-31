module.exports = {
    Name: "repos",
    Author: "trefis",
    Aliases: ["reps", "repos"],
    Date: "10/16/2020, 10:04:56 AM",
    Code: (async function repos(user) {
        try {
            const axios = require('axios').default;
            const os = require('os');
            const { data } = await axios({
                method: 'get',
                url: `https://api.github.com/users/${user}/repos`,
                responseType: 'json',
            });
            const messages = (data || []).map(function (repoData) {
                return ` ${repoData.name}`;
            });

            return messages == "" ? `That user doesn't have any repositories.` : messages.join()

        } catch (error) {
            return `The response from server is: 404. Probably user doesnt exists. monkaS`
        }
    }),
};