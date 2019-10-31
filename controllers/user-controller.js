const User = require('../models/user');
const userContoller = {};

userContoller.show = async (_, res) => {
    await User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
}

userContoller.add = async (req, res) => {
    const username = req.body.username;
    console.log(username);
    const newUser = new User({username});

    await newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json(`Error ${err}`));
}

module.exports = userContoller;