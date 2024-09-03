const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Info = require('../models/info');

router.post('/api/post', async (req, res) => {
    const info = new Info({
        location: req.body.location,
        name: req.body.name,
        email: req.body.email,
    });

    let infoId; // This variable will store the ID of the created post
    try {
        const newInfo = await info.save();
        res.status(201).json({ id: newInfo._id });
        infoId = newInfo._id;
        console.log("Info created with ID:", infoId);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

