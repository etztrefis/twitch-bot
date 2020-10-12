console.log(repos(`etztrefis`, '--full'));
async function repos(user, type) {
    const axios = require('axios');
    if (type === "--full") {
        let message = "";
        axios({
            method: 'get',
            url: `https://api.github.com/users/${user}/repos`,
            responseType: 'json',
        })
            .then(function (response) {
                for (let i = 0; i < response.data.length; i++) {
                    message += ` N: ${response.data[i]['name']}, F:  ${response.data[i]['fork']}, L:  ${response.data[i]['language']} ❗ `;
                }
            })
            .catch(function (err) {
                console.error(err);
            })
    }
    else {
        axios({
            method: 'get',
            url: `https://api.github.com/users/${user}/repos`,
            responseType: 'json',
        })
            .then(function (response) {
                for (let i = 0; i < response.data.length; i++) {
                    smallMessage += ` N: ${response.data[i]['name']}❗ `;
                }

            })
            .catch(function (err) {
                console.error(err);
            })
    }
    return ` ${message} `;
}