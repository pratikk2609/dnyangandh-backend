const express = require("express")
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
const UserInfo = require('./User');
var app = express();
app.use(bodyparser.json());


mongoose
     .connect("mongodb+srv://saileekadam03:IJRlbOARQElkz34Q@cluster0.goi2zn4.mongodb.net/?retryWrites=true&w=majority", 
     { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));

app.get("/",(req, res)=>{
    console.log("hello")
    res.json({
        msg:"Hello from backend message again. Hello Team"
    })
})
app.get("/user",(req, res)=>{
    try {
        reqbody = {
            username :"pravin",
            password : "pravin@1234",
            email : "pravin@gmail.com",
            age : 45,
            address : "pashan pune",
            gender : "Male",
            phone_number : 123,
            role : "student"
        }
        const adduser = new UserInfo(reqbody);
        console.log(reqbody);
        console.log("New User Added in the Database");
        const newsuser = adduser.save();
        return res.status(201).send(newsuser );
      } catch (e) {
        return res.status(400).send(e);
      }
})

app.listen(5555)
console.log(`App running on 5555`)