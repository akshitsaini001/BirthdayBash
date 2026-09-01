const express = require("express");
const path = require("path");
const app = express();
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"))


app.get("/", (req , res)=>{
    res.render("home.ejs")
})

app.get("/message" , (req , res)=>{
    res.render("message.ejs")
})

app.get("/gallery" , (req , res)=>{
    res.render("gallery.ejs")
})
app.listen(3000 , ()=>{
    console.log(`App is listening on the 3000 port.`)
})