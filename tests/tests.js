repos(`etztrefis`, `--full`).then((messages) => {
    console.log(messages)
});

async function repos(user, showFullData) {
    const axios = require('axios').default;
    const { data } = await axios({
        method: 'get',
        url: `https://api.github.com/users/${user}/repos`,
        responseType: 'json',
    });

    const messageHandler = showFullData === `--full` ? githubReposFullName : githubReposName;
    const messages = (data || []).map(messageHandler);
    // data = > [1,2,3] messageHandler = func(arg) { return arg + 1;} => messages.map(messageHandler) = > messages = [2,3,4]
    return messages;
}

function githubReposName(repoData) {
    return ` N: ${repoData.name}❗ `;
}

function githubReposFullName(repoData) {
    return ` N: ${repoData.name}, F:  ${repoData.fork}, L:  ${repoData.language} ❗ `;
}