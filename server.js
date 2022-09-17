var express=require("express");
var mongoose=require("mongoose"); 
var bodyParser= require("body-parser");
var random=require("random");
mongoose.connect('mongodb+srv://mchaube:BgsbiIHp7kOFBstW@cluster0.aqybduh.mongodb.net/?retryWrites=true&w=majority');

var app=express();
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.json({message:"getting started with mvc archit3ecture "});
})

var db=mongoose.connection;
db.on("error",()=>{
    console.log("unable to connect to DB");
});

db.once('open',()=>{
  console.log("connection successful!");
});


app.listen(8000,()=>{
    console.log("your server is running on port 8000");
});


//Do this using mvc architecture
//GET  /api/tutorials
//GET /api/tutorials/:id
//POST /api/tutorials
//PUT /api/tutorials/:id
//DELETE /api/tutorials/:id
//DELETE /api/tutorials

