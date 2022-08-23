var express=require("express");
var app=express();
var bodyParser= require("body-parser");

app.use(bodyParser.json());



app.get('/',(req,res)=>{
    console.log(req.body);
    res.send("hello");
   
})


app.get('/users',(req,res)=>{
    res.send("users");

})

app.post('/login',(req,res)=>{
var userName=req.body.username;
var password=req.body.password;

console.log(userName);
console.log(password);
res.send("login successfully!")
})
app.listen(8000,()=>{
    console.log("your server is running on port 8000");
})
