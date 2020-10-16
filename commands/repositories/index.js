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
        //TypeError: Cannot read property 'name' of undefined : because of this.FullReposName() \ this.ReposName() need to refactor messsageHandler or 
        //refuse to using array.map(), im tired
        const messages = showFullData === `--full` ? 
        (data || []).map(function(repoData){
            return ` N: ${repoData.name}, F:  ${repoData.fork}, L:  ${repoData.language} ❗ `;
        }) : (data || []).map(function(repoData){
            return ` N: ${repoData.name}❗ `;
        });

        return messages.join(os.arch());
    }),
};