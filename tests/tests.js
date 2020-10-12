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

    const messageHandler = showFullData === `--full` ? githubReposFullName : githubReposName;
    const messages = (data || []).map(messageHandler);

    return messages.join(os.EOL);
}

function githubReposName(repoData) {
    return ` N: ${repoData.name}❗ `;
}

function githubReposFullName(repoData) {
    return ` N: ${repoData.name}, F:  ${repoData.fork}, L:  ${repoData.language} ❗ `;
}