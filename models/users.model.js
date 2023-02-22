const mongoose=require('mongoose');

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    hashedPassword:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true,
        unique:true,
        trim:true

    },
    role:{
        type: String,
        enum: ['user', 'manager', 'admin'],
        default: 'user',
    }
},{timestamps:true});

module.exports = mongoose.model('Users',userSchema);
