const request = require('request');
const async = require('async');
const User = require('../../models/userModel');

let users = [];

exports.getUsers = (done) => {

// generate 5 users
    async.times(10, (n, next) => {
        console.log('GOt HERE', n);
        request.get('https://randomuser.me/api', (err, response, body) => {

            const usersData = JSON.parse(body);
            const user = new User(usersData);
            console.log('USER DATA', users.length);
            users.push(user);
            next(err, usersData);
        });
    }, (err, usersData) => {
        // usersData param can be useful for debugging
        done(err, users.length);
    });

};

exports.getUserByFirstname = (done) => {
   // `/users/firstname/:firstname`
};

exports.createUser = (done) => {
    const user = new User(usersData);
    users.push(user);

    done(err, users.length);
};


