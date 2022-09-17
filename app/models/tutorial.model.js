const mongoose=require("mongoose");

const TutorialSchema=mongoose.Schema({
    title:String,
    description:String,
    published:Boolean
});


const TutorialModel=mongoose.model('tutorials',TutorialSchema);

module.exports=TutorialModel;