const _ = require('lodash');

class User {

    constructor(data) {
        const userData = data.results[0];

        this.gender = userData.gender;
        this.firstname = userData.name.first;
        this.city = userData.location.city;
        this.email = userData.email;
        this.city = userData.location.city;
    }
}

module.exports = User;