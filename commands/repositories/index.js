module.exports = {
    Name: "repos",
    Author: "trefis",
    Aliases: ["reps", "repos"],
    Date: "10/16/2020, 10:04:56 AM",
    Code: (async function repos(user, showFullData) {
        try {
            const axios = require('axios').default;
            const os = require('os');
            const { data } = await axios({
                method: 'get',
                url: `https://api.github.com/users/${user}/repos`,
                responseType: 'json',
            });
            const messages = showFullData === `--full` ?
                (data || []).map(function (repoData) {
                    return ` N: ${repoData.name}, F:  ${repoData.fork}, L:  ${repoData.language} ❗ `;
                }) : (data || []).map(function (repoData) {
                    return ` N: ${repoData.name}❗ `;
                });

            return messages == "" ? `That user doesn't exists.` : messages.join(os.arch);

        } catch (error) {
            return `The response from server is: 404 Error. Probably you are using forbidden characters. monkaS`
        }
    }),
};