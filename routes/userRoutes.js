const userRepo = require('../dataAccess/repos/userRepository');


exports.configure = (app) => {

    app.post('/users', createUser);
    app.get('/users', getUsers);

};

function createUser(req, res, done) {
    const userData = req.body;

    userRepo.createUser(userData, (err, alarm) => {
        return res.json(alarm);
    });
}

function getUsers(req, res, done) {

    userRepo.getUsers((err, users) => {
        console.log('GET users', users);
        return res.json(users);
    });

}