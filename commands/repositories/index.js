module.exports = {
    Name: "repos",
    Author: "trefis",
    Aliases: ["reps", "repos"],
    Date: "10/16/2020, 10:04:56 AM", 
    Code: (async function repos(user, showFullData) {
        const axios = require('axios').default;
        const os = require('os');
        const { data } = await axios({
            method: 'get',
            url: `https://api.github.com/users/${user}/repos`,
            responseType: 'json',
        });
        const messages = showFullData === `--full` ? 
        (data || []).map(function(repoData){
            return ` N: ${repoData.name}, F:  ${repoData.fork}, L:  ${repoData.language} ❗ `;
        }) : (data || []).map(function(repoData){
            return ` N: ${repoData.name}❗ `;
        });

        return messages.join(os.arch);
    }),
};