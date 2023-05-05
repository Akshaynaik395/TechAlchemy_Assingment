const mongoose=require('mongoose')
var books=mongoose.model('Books',{
    
    Book_Title:{
        type:String,
    },
    Author:{
        type:String,
    },
    ISBN:{
        type:String,
    },
    
    
},'books');

module.exports={books};