const User = require('../models/User');

module.exports = {
    async store(req, res) {
        try {
            const { firstName, lastName, email, password } = req.body;
            const existentUser = await User.findOne({ email });

            if (!existentUser) {
                const user = await User.create({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password
                    })
                    return res.json(user);
            } else {
                return res.status(400).json({
                    message: 'There already exists an account with that email. Try loggin in instead!'
                })
            }
        } catch (err) {
            throw Error(err)
        }
    },

    async getById(req, res) {
        try {
            const { userId } = req.params;
            const user = await User.findById(userId);
            return res.status(200).json(user);

        } catch (error) {
            return res.status(400).json({
                message: "Could not find any user with that id."
            })
        }
    }
}