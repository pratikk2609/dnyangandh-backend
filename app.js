const express = require("express")
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
const UserInfo = require('./User');
var app = express();
app.use(bodyparser.json());
var cors = require('cors')

app.use(cors())
mongoose
    .connect("mongodb+srv://saileekadam03:IJRlbOARQElkz34Q@cluster0.goi2zn4.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    console.log("hello")
    res.json({
        msg: "Hello from backend message again. Hello Team"
    })
})

app.get("/user", async (req, res) => {
    try {
        const getuser = await UserInfo.find({});
        console.log(getuser)
        console.log("All the users in the database")
        return res.send(getuser);
    } catch (e) {
        return res.status(400).send(e);
    }
})
app.post("/user", async (req, res) => {
    try {
        const adduser = new UserInfo(req.body)
        console.log(req.body);
        console.log("New User Added in the Database");
        const newuser = await adduser.save();
        return res.status(201).send(newuser);
    } catch (e) {
        return res.status(400).send(e);
    }
})
app.post("/user/authenticate", async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.body.name)
        console.log(req.body.password)
        const getuser = await UserInfo.find({ username: req.body.name, password: req.body.password });
        console.log(getuser)
        if (getuser.length > 0) {
            res.status(200).send({ data: "success" })
        }
        else {
            res.send('user not found')
        }
    } catch (e) {
        return res.status(400).send(e);
    }
})

app.delete('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await UserInfo.findByIdAndDelete(id)
        console.log("Record Deleted")
        res.send(`Document with ${data.username} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

app.patch('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const user_update = await UserInfo.findByIdAndUpdate(
            id, updatedData, options
        )
        console.log(user_update)
        console.log("Updated the required the details")
        res.send(user_update)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

app.listen(5555)
console.log(`App running on 5555`)