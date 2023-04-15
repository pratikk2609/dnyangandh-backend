const express = require("express")
const app = express()

app.get("/",(req, res)=>{
    console.log("hello")
    res.json({
        msg:"Hello from backend message again. Hello Team"
    })
})
app.get("/user",(req, res)=>{
    console.log("Hello Team")
    res.json({
        msg:"hello from user"
    })
})

app.listen(3000)