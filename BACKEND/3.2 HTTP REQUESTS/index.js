import express from "express";
const app = express();
const port = 3000;


app.get("/",(req, res)=>{
    res.send("<h1>Hi there Boss</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>Hey there thats me</h1> ");
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Call me!!!</h1><p>+30 6999999999</p>");
})

app.listen (port,()=>{
    console.log(`"We are up and running on ${port}`);
})