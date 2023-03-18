const express = require("express")
const app = express()

app.get("/",(req, res)=>{
    console.log("hello")
    res.json({
        msg:"Hello from backend"
    })
})

app.listen(3000)