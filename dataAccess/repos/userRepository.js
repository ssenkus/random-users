const request = require('request');
const async = require('async');
const User = require('../../models/userModel');
const _ = require('lodash');

let users = [];

exports.fetchUsers = (done) => {

// generate 5 users
    async.times(10, (n, next) => {
        request.get('https://randomuser.me/api', (err, response, body) => {

            const usersData = JSON.parse(body);
            // API currently only sends one user
            // TODO: handleResponse fn should format data
            const user = new User(usersData.results[0]);
            users.push(user);
            next(err, usersData);
        });
    }, (err, usersData) => {
        // usersData param can be useful for debugging
        done(err, users);
    });

};

exports.getUserByFirstName = (firstName, done) => {
    const user = _.find(users, {firstname: firstName});
    done(null, user);
};

exports.createUser = (usersData, done) => {
    const user = new User(usersData);
    users.push(user);

    done(null, user);
};


