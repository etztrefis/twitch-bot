module.exports = {
    Name: "repos",
    Author: "trefis",
    Aliases: ["reps", "repos"],
    Date: "", //LATER
    Code: (async function repos(user, showFullData) {
        const axios = require('axios').default;
        const os = require('os');
        const { data } = await axios({
            method: 'get',
            url: `https://api.github.com/users/${user}/repos`,
            responseType: 'json',
        });
        // OMEGALUL  OMEGALUL OMEGALUL OMEGALUL OMEGALUL --full doesnt work 
        const messageHandler = showFullData === `--full` ? function githubReposName(repoData) { return ` N: ${repoData.name}❗ `; }
            : function githubReposFullName(repoData) { return ` N: ${repoData.name}, F:  ${repoData.fork}, L:  ${repoData.language} ❗ `; }
        const messages = (data || []).map(messageHandler);

        return messages.join(os.EOL);
    })
};