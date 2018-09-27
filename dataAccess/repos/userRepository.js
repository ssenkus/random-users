const request = require('request');

exports.getUsers = (done) => {

    request.get('https://randomuser.me/api', (err, response, body) => {

        let usersData = JSON.parse(body);

        done(err, usersData);
    });

};

exports.createUser = (done) => {

    request.get('https://randomuser.me/api', (err, response, body) => {

        let usersData = JSON.parse(body);

        done(err, usersData);
    });
}
