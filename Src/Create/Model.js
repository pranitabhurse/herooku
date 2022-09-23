


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


// customers adding



var CustomersAdd = new mongoose.Schema({
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

const CustomersAdding = mongoose.model('CustomersAdding', CustomersAdd);

var BulkPaylist = new mongoose.Schema({
    email : {
        type : String,
        required: true
    },
    payment : {
        type : Number,
        required: true
    },
   date : {
    type : Date
   }
   
})

const BulkPay = mongoose.model('BulkPay', BulkPaylist);




// company profile 

//employee registration



var employeeRegister = new mongoose.Schema({
    name : {
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
    
   date_of_join:{
    type: Date,
    required: true,
   },
   designation:{
    type: String,
        required: true,
   },
   password:{
    type: String,
    required: true,
   }

})

const EmployeeReg = mongoose.model('EmployeeReg', employeeRegister);



// regular login

var regularLogin = new mongoose.Schema({
    email : {
        type : String,
        required: true
    },
   
   date : {
    type : String
   },
   name : {
    type : String
   }
   
})



const regularLoginData = mongoose.model('regularLoginData', regularLogin);

var regularLogout = new mongoose.Schema({
    email : {
        type : String,
        required: true
    },
   
   date : {
    type : String
   },
   name : {
    type : String
   },
   description : {
    type : String
   }
   
})


const regularLogoutData = mongoose.model('regularLogoutData', regularLogout);

var registerStudent = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    mobile : {
        type : Number,
        required: true
    },
    Pmobile : {
        type : Number,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    course : {
        type : String,
        required: true
    },
    fees : {
        type : String,
        required: true
    },
    finst : {
        type : String,
        required: true
    },
    sinst : {
        type : String,
        required: true
    },
    tinst : {
        type : String,
        required: true
    },
   
   accountno : {
    type : String,
    required: true
   },
   ifsccode:{
    type : String,
    required: true
   },  
   Address : {
    type : String
   }
   
})


const studentReg = mongoose.model('studentReg', registerStudent);





// exam form 


var examForm = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    mobile : {
        type : Number,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    course : {
        type : String,
        required: true
    },
    fees : {
        type : String,
        required: true
    },
  
   accountno : {
    type : String,
    required: true
   },
   ifsccode:{
    type : String,
    required: true
   },
   
   
   
})


const examStudent = mongoose.model('examStudent', examForm);



module.exports = {BulkPay, UserReg  , VenderAdding , CustomersAdding , EmployeeReg , regularLoginData , regularLogoutData , studentReg , examStudent}



