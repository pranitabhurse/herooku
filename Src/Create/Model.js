


const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true
    },

    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);



var schemaReg = new mongoose.Schema({
    
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        // validate(value){
        //    if(!validator.isEmail(value)){
        //        throw new error("email is invalid")
        //    }
        // }
    },
    mobile : {
        type: Number,
        required: true    
       
    },
    password : {
        type: String,
        required: true
    },
   
})


const UserReg = mongoose.model('UserReg', schemaReg);









var VenderAdd = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    country : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
    },
    mobile : {
        type: Number,
        required: true,
    },
    accountno :{
        type: Number,
        required: true,
    },
    ifsc :{
        type: String,
        required: true,
    },
    bankname :{
        type: String,
        required: true,
    },
    upiid : {
        type: String,
        required: true
    },
   
})


const VenderAdding = mongoose.model('VenderAdding', VenderAdd);


module.exports = {Userdb, UserReg  , VenderAdding}



