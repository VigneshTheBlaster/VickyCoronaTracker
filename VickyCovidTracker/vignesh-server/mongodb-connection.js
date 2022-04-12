const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/v_vignesh",{ useNewUrlParser: true , useUnifiedTopology: true },(err)=>{
        if(!err){
                console.log("Vicky your connection success");
        }
        else{
                console.log("Vicky your connection failed");
        }
});

const sch=require('./mongodb-schema');























































