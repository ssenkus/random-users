const _ = require('lodash');

class User {

    constructor(userData) {
        try {
            this.gender = userData.gender;
            this.firstname = userData.name.first;
            this.city = userData.location.city;
            this.email = userData.email;
            this.cell = userData.cell;
        } catch (err) {
            throw new Error(`ERROR validating User data ${err.message}`);
        }
    }

}

module.exports = User;