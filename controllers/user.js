const user = require('../models/user');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkJWT = require('./auth');

// routes
router.get('/', checkJWT ,async (req, res) => {
    try {
       const users = await user.findOne({});
       console.log(users);
       res.json(users)
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
});

router.post('/',async (req, res) => {
    try {
        // Get data from the request body
        const data = req.body;
        // Create a new user object
        const newUser = new user(data);
        // Save the user object to the database
        await newUser.save();
        // Send a response to the client
        res.json({ message: 'User created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



module.exports = router;