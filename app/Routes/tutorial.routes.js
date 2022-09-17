
module.exports=app=>{
    app.post("/api/tutorials",(req,res)=>{
        res.json({message:"creating a new post"});
    })
}