var express=require("express");
var app=express();
var bodyParser= require("body-parser");
var monsgoose=require("mongoose"); 
var random=require("random");
const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb+srv://mchaube:BgsbiIHp7kOFBstW@cluster0.aqybduh.mongodb.net/?retryWrites=true&w=majority')

var db=mongoose.connection;
db.on("error",()=>{
    console.log("unable to connect to DB");
})

db.once('open',()=>{
  console.log("connection successful!");
})


var BlogSchema=mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
    author:String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
})

var BookSchema=mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
})

var Book=mongoose.model('Book',BookSchema);
var book1=new Book({name:"LLD",price:400,quantity:50});
book1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


app.use(bodyParser.json());

app.listen(8000,()=>{
    console.log("your server is running on port 8000");
})  
















































/*
var users=[
    {id:47264287,name:"mayank",age:22},
    {id:237293,name:"akhilesh",age:22},
    {id:832732,name:"ved",age:22},
    {id:1631813,name:"pankaj",age:22},
    {id:0871381,name:"dhananjay",age:22},
    {id:16381361,name:"prateek",age:22},

];

app.get('/api/users',(req,res)=>{
    res.json(users);
})
app.get('/api/users/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const user=users.find((user)=>user.id===id)

    if(!user)
    {
        res.status(404).json({message:"user does not exists"});
    }
    res.send(user);
})
//create a user
app.post('/api/users',(req,res)=>{

    if(!req.body.name || !req.body.age)
    {
        res.status(400).json({message:"invalid data!"});
    }
    const user={name:req.body.name,age:req.body.age,id:random.int(1,100000)};
    users.push(user);
     res.send(user);
})

//update a user
app.put('/api/users/:id',(req,res)=>{

    const id=req.params.id;
    const user=users.find((user)=>user.id===parseInt(id));
    if(!user)
    {
        res.status(404).json({message:"invalid user id"});
    }

    const keys=Object.keys(req.body);
    keys.forEach((key)=>{
        if(!user[key])
        {
            res.status(400).json({message:"invalid details can not update"});
        }
        user[key]=req.body[key];
    })
    res.send(user);

})

//delete
app.delete('/api/users/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    const user=users.find((user)=>user.id===parseInt(id));
    if(!user)
    {
        res.status(404).json({message:"invalid user id"});
    }
    users=users.filter((user)=>user.id!=parseInt(id));
    res.send(user);
})
*/

/*

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
})*/