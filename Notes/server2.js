var express=require("express");
var mongoose=require("mongoose"); 
var bodyParser= require("body-parser");
var random=require("random");

var app=express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://mchaube:BgsbiIHp7kOFBstW@cluster0.aqybduh.mongodb.net/?retryWrites=true&w=majority');

var db=mongoose.connection;
db.on("error",()=>{
    console.log("unable to connect to DB");
});

db.once('open',()=>{
  console.log("connection successful!");
});

const blogSchema = new mongoose.Schema({
    id:Number,
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

const Blog=mongoose.model('Blog',blogSchema);

//create a new blog
app.post('/api/blogs',(req,res)=>{
console.log(req.body);
    const {title,author,body}=req.body;
    const id=random.int(0,100000);
    const comments=[];
    const meta={
        votes:0,
        favs:0
    }

    const newBlog=new Blog({title,author,body,id,meta,comments});

    newBlog.save()
    .then((data)=>{
        if(!data){
            res.status(400).send({message:"something went wrong"});
        }
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({message:"Server not available"});
    })

}); 

app.get('/api/blogs',(req,res)=>{
    Blog.find({})
    .then((data)=>{
        if(!data){
            res.status(404).send({message:"unable to fetch blogs"});
        }
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({message:err});
    })

})

app.get('/api/blogs/:id',(req,res)=>{
    //const id=req.params.id;
    const id=mongoose.Types.ObjectId(req.params.id);
    //Blog.find({id})
    //find by mongoose id
    Blog.findById(id) 
    .then((data)=>{
        if(!data.length || !data){
            res.status(404).send({message:"unable to fetch blogs"});
        }
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({message:err});
    })

})


app.listen(8000,()=>{
    console.log("your server is running on port 8000");
});
