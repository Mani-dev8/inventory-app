const User = require('../models/usersModel');
const bcrypt = require('bcrypt');
exports.newUser = async (req, res) => {

    try {
        const { userName, email, password } = req.body;
        const isExisting = await User.findOne({ email })
        if (isExisting !== null) {
            return res.status(400).json({ error: 'Email already exists' })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ userName, email, password: hashedPassword });
        await newUser.save();
        res.status(200).json({ message: 'account created successfully' })

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isExisting = await User.findOne({ email })
        if (isExisting === null) {
            return res.status(400).json({ error: 'User does not exist' })
        }
        const passwordMatch = await bcrypt.compare(password, isExisting.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        res.status(200).json({ message: 'User Authenticated' })
    } catch (error) {
        console.log('sign in Error', error)
        res.status(500).json({ error: 'Internal server error' });
    }
}