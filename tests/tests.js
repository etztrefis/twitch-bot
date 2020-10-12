repos();
async function repos(user, type) {
    const axios = require('axios');
    let query = '';
    if (type === "--full") {
        axios({
            method: 'get',
            url: `https://api.github.com/users/${user}/repos`,
            responseType: 'json',
        })
            .then(function (response) {
                for (let i = 0; i < response.data.length; i++) {
                    query += ` N: ${response.data[i]['name']}, F:  ${response.data[i]['fork']}, L:  ${response.data[i]['language']} ❗ `;
                }
                return console.log("1" + query);
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
                    query += `N: ${response.data[i]['name']}❗ `;
                }
                return console.log("2" + query);
            })
            .catch(function (err) {
                console.error(err);
            })
    }
}