const express = require("express")
const app = express()

app.get("/",(req, res)=>{
    console.log("hello")
    res.json({
        msg:"Hello from backend message again. Hello Team"
    })
})

app.listen(3000)