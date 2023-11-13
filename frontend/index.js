const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//require path
const path = require("path");


//set the view Engine
app.set("view engine","ejs");
//set the path of views folder
app.set("views",path.join(__dirname,"/views"));

//set the static folder PUBLIC
app.use(express.static(path.join(__dirname,"public")));



//render main page
app.get("/",(req,res)=>{
    res.render("index");
})














app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})