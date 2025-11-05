const express = require('express');
const router = express.Router();
const user = ("../models/user");


router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });


    await newUser.save();


    res.status(201).json({ message: "User registered successfully" });

    


})


module.exports = router;