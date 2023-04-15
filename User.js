const express = require("express")
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    phone_number : {
        type : Number,
        required : true,
    },
    role : {
        type : String,
        required : true,
    }
});
//creating collection
const UserInfo = new mongoose.model('UserInfo',userSchema);

module.exports = UserInfo;