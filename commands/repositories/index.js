module.exports = {
    Name: "repos",
    Author: "trefis",
    Aliases: ["reps", "repos"],
    Date: "", //LATER
    Code: (async function repos(user, type) {
        const axios = require('axios');
        let fullMessage = null;
        let smallMessage = "321";
        if (type === "--full") {
            axios({
                method: 'get',
                url: `https://api.github.com/users/${user}/repos`,
                responseType: 'json',
            })
                .then(function (response) {
                    for (let i = 0; i < response.data.length; i++) {
                        fullMessage += ` N: ${response.data[i]['name']}, F:  ${response.data[i]['fork']}, L:  ${response.data[i]['language']} ❗ `;
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

        return fullMessage ? ` ${fullMessage} ` : `${smallMessage}`
    })
};