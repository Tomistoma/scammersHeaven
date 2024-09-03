const mongoose = require("mongoose");
const objectAssign = require("object-assign");
const infoSchema = new mongoose.Schema({
   
    location: {
        type: String,
    },
    name:{
        type: String,
    },
    email: {
        type: String,
    },
    })

    module.exports = mongoose.model('posts', infoSchema );