var express=require("express");
var mongoose=require("mongoose"); 
var bodyParser= require("body-parser");
const dbConfigs=require("./app/config/db.config");
mongoose.connect(dbConfigs.url);

var app=express();
app.use(bodyParser.json());

//db connection
var db=mongoose.connection;

db.on("error",()=>{
    console.log("unable to connect to DB");
});

db.once('open',()=>{
  console.log("connection successful!");
});

require("./app/Routes/tutorial.routes")(app);

//api requests
app.get("/",(req,res)=>{
    res.json({message:"getting started with mvc archit3ecture "});
})




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

