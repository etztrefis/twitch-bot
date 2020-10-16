repos(`etztrefis`, `--full`).then((messages) => {
    console.log(messages)
});

    async function repos(user, showFullData) {
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
    // data = > [1,2,3] messageHandler = func(arg) { return arg + 1;} => messages.map(messageHandler) = > messages = [2,3,4]
    }