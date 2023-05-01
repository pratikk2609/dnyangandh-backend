const express = require("express")
const mongoose = require("mongoose");

const ScholarshipSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    }
});
//creating collection
const ScholarshipInfo = new mongoose.model('ScholarshipInfo',ScholarshipSchema);

module.exports = ScholarshipInfo;