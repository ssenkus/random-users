const userRepo = require('../dataAccess/repos/userRepository');


exports.configure = (app) => {

    app.post('/users', createUser);
    app.get('/users', fetchUsers);
    app.get(`/users/firstname/:firstname`, getUserByFirstName)

};

function createUser(req, res, done) {
    const userData = req.body;
    userRepo.createUser(userData, (err, user) => {
        if (err) return res.send(err.message);

        return res.json(user);
    });
}

function fetchUsers(req, res, done) {
    userRepo.fetchUsers((err, usersCount) => {
        if (err) return res.send(err.message);

        return res.json(usersCount);
    });
}

function getUserByFirstName(req, res, done) {
    const firstName = req.params.firstname;

    userRepo.getUserByFirstname(firstName, (err, user) => {
        if (err) return done(err);
        console.log('USER', user)
        return res.json(user);
    });

}