const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    User_Name:{
        type:String
    },
    Password:{
        type:String
    },
    First_Name:{
        type:String
    },
    Last_Name:{
        type:String
    },
    Phone_Number:{
        type:String
    },
    Select_State:{
        type:String
    },
    email:{
        type:String
    },
    Occupation:{
        type:String
    }
});
module.exports = mongoose.model("VV19MIS0072",UserSchema);