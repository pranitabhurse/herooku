

const { UserReg , VenderAdding , BulkPay , CustomersAdding , EmployeeReg , regularLoginData , regularLogoutData , studentReg } = require('../Create/Model');
// var bodyParser = require('body-parser')
const express = require('express')

const emailvalidator = require("email-validator");
const { now } = require('mongoose');
exports.UserReg = async(req,res)=>{
    // validate request
  
    if(!req.body){
        res.status(400).send({ message : "required all feild"});
        return;
    }
   else if(emailvalidator.validate(req.body.email)){
    try{
        const userExist= await UserReg.findOne({email : req.body.email})
        if(userExist){
             return res.status(422).json({message:"this email is alreay register"})
        }
        else{
            const UserR = new UserReg({  
                name : req.body.name,
                email: req.body.email,
                mobile : req.body.mobile,
                password : req.body.password
            })
        
            // save user in the database
            UserR.save(UserR)
                .then(data => {
                    return res.status(200).json({message:"user register successfully"})
                    // res.send(data)
                    // res.redirect('/add-user');
                })
        }
    }   catch(err) {
                res.status(500).send({
                    message : err.message || "Some error occurred while creating a create operation"
                });
            };
            
  }

  else{
    return res.status(200).json({message:"invalid email"})
}
}






// user Login


exports.UserLogin = async(req,res)=>{
  
    try{
        const { email , password }= req.body;
    if( !email || !password  )
    {
        return res.status(400).json({message :"error please fill all feield"}) 
    }
      const loginData = await UserReg.findOne({email:email});
      if(loginData){
        //   const matchPass = await bcrypt.compare(password , loginData.password)
          if(password!==loginData.password)
          {
      
            return res.status(400).json({message :"invalid details"}) 
    
          }
   
      else{
    //  console.log(loginData); 
     res.send(loginData)
        // return res.status(201).json({message :"user login successfully"}) ;
        
      }
    }
     else {
        return res.status(400).json({message :"invalid details"}) 
     }
      
    }catch(err){
       console.log(err) 
    }
    
}


//vender Add


exports.venderAdding = async(req,res)=>{
    // validate request
  
    if(!req.body){
        res.status(400).send({ message : "required all feild"});
        return;
    }
   else if(emailvalidator.validate(req.body.email)){
    try{
        const userExist= await UserReg.findOne({email : req.body.email})
        if(!userExist){
             return res.status(422).json({message:"this email is not register"})
        }
        else{
            const VenderAdd = new VenderAdding({  
                name : req.body.name,
                country: req.body.country,
                email: req.body.email,
                mobile : req.body.mobile,
                accountno : req.body.accountno,
                ifsc : req.body.ifsc,
                bankname : req.body.bankname,
                upiid : req.body.upiid
            })
        
            // save user in the database
            VenderAdd.save(VenderAdd)
                .then(data => {
                    return res.status(200).json({message:"vender register successfully"})
                    // res.send(data)
                    // res.redirect('/add-user');
                })
        }
    }   catch(err) {
                res.status(500).send({
                    message : err.message || "Some error occurred while creating a create operation"
                });
            };
            
  }

  else{
    return res.status(200).json({message:"invalid email"})
}
}


// get vender details



exports.getVenderData =  async (req, res) => {
    try{
        const data = await VenderAdding.find({email:req.body.email});
       
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


// delete vender

exports.deleteVender = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await VenderAdding.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}



// customers Adding 



exports.CustomersAdding = async(req,res)=>{
    // validate request
  
    if(!req.body){
        res.status(400).send({ message : "required all feild"});
        return;
    }
   else if(emailvalidator.validate(req.body.email)){
    try{
        const userExist= await UserReg.findOne({email : req.body.email})
        if(!userExist){
             return res.status(422).json({message:"this email is not register"})
        }
        else{
            const CustomersAdd = new CustomersAdding({  
                name : req.body.name,
                country: req.body.country,
                email: req.body.email,
                mobile : req.body.mobile,
                accountno : req.body.accountno,
                ifsc : req.body.ifsc,
                bankname : req.body.bankname,
                upiid : req.body.upiid
            })
        
            // save user in the database
            CustomersAdd.save(CustomersAdd)
                .then(data => {
                    return res.status(200).json({message:"Customers Adding successfully"})
                    // res.send(data)
                    // res.redirect('/add-user');
                })
        }
    }   catch(err) {
                res.status(500).send({
                    message : err.message || "Some error occurred while creating a create operation"
                });
            };
            
  }

  else{
    return res.status(200).json({message:"invalid email"})
}
}

// get list Customers

exports.getCustomersData =  async (req, res) => {
    try{
        const data = await CustomersAdding.find({email:req.body.email});
       
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


// delete customers data


// delete vender

exports.deleteCustomers = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await CustomersAdding.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}



// bulk payment 


exports.BulkPaylist = async(req,res)=>{
    // validate request
  
    if(!req.body){
        res.status(400).send({ message : "required all feild"});
        return;
    }
   else if(emailvalidator.validate(req.body.email)){
    try{
        const userExist= await UserReg.findOne({email : req.body.email})
        if(!userExist){
             return res.status(422).json({message:"this email is not register"})
        }
        else{
            const paymentAdd = new BulkPay({  
                
                email: req.body.email,
                payment : req.body.payment,
                date : new Date()
                
            })
        
            // save user in the database
            paymentAdd.save(paymentAdd)
                .then(data => {
                    return res.status(200).json({message:"Payment Add successfully"})
                    // res.send(data)
                    // res.redirect('/add-user');
                })
        }
    }   catch(err) {
                res.status(500).send({
                    message : err.message || "Some error occurred while creating a create operation"
                });
            };
            
  }

  else{
    return res.status(200).json({message:"invalid email"})
}
}


// get bulk pay data 

exports.getBulkPayaData =  async (req, res) => {
    try{
        const data = await BulkPay.find({email:req.body.email});
       
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// company profile

// register Employee



exports.employeeRegistration = async(req,res)=>{
    // validate request
  
    if(!req.body){
        res.status(400).send({ message : "required all feild"});
        return;
    }
   else if(emailvalidator.validate(req.body.email)){
    try{
        const userExist= await EmployeeReg.findOne({email : req.body.email})
        if(userExist){
             return res.status(422).json({message:"this email is alreay register"})
        }
        else{
            const EmployeeRegister = new EmployeeReg({  
                name : req.body.name,
                email: req.body.email,
                mobile : req.body.mobile,
                accountno : req.body.accountno,
                ifsc : req.body.ifsc,
               date_of_join:new Date(),
               designation:req.body.designation,
               password:req.body.password,
            })
        
            // save user in the database
            EmployeeRegister.save(EmployeeRegister)
                .then(data => {
                    return res.status(200).json({message:"Employee Adding successfully"})
                    // res.send(data)
                    // res.redirect('/add-user');
                })
        }
    }   catch(err) {
                res.status(500).send({
                    message : err.message || "Some error occurred while creating a create operation"
                });
            };
            
  }

  else{
    return res.status(200).json({message:"invalid email"})
}
}



// employee login


exports.employeeLogin = async(req,res)=>{
  
    try{
        const { email , password }= req.body;
    if( !email || !password  )
    {
        return res.status(400).json({message :"error please fill all feield"}) 
    }
      const loginData = await EmployeeReg.findOne({email:email});
      if(loginData){
        //   const matchPass = await bcrypt.compare(password , loginData.password)
          if(password!==loginData.password)
          {
      
            return res.status(400).json({message :"invalid details"}) 
    
          }
   
      else{
    //  console.log(loginData); 
     res.send(loginData)
        // return res.status(201).json({message :"user login successfully"}) ;
        
      }
    }
     else {
        return res.status(400).json({message :"invalid details"}) 
     }
      
    }catch(err){
       console.log(err) 
    }
    
}


// get employee data


exports.getEmployeeData =  async (req, res) => {
    try{
        const data = await EmployeeReg.find();
       
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


exports.regularLogin = async(req,res)=>{
    // validate request
  
    if(!req.body){
        res.status(400).send({ message : "required all feild"});
        return;
    }
   else if(emailvalidator.validate(req.body.email)){
    try{
        const userExist= await EmployeeReg.findOne({email : req.body.email})
        if(!userExist){
             return res.status(422).json({message:"this email is not register"})
        }
        else{
            const regularLogData = new regularLoginData({  
                
                email: req.body.email,              
                date : req.body.date,
                name :userExist.name
                
            })
        
            // save user in the database
            regularLogData.save(regularLogData)
                .then(data => {
                    return res.status(200).json({message:"Login successfully"})
                    // res.send(data)
                    // res.redirect('/add-user');
                })
        }
    }   catch(err) {
                res.status(500).send({
                    message : err.message || "Some error occurred while creating a create operation"
                });
            };
            
  }

  else{
    return res.status(200).json({message:"invalid email"})
}
}



exports.regularLogoutReport = async(req,res)=>{
    // validate request
  
    if(!req.body){
        res.status(400).send({ message : "required all feild"});
        return;
    }
   else if(emailvalidator.validate(req.body.email)){
    try{
        const userExist= await EmployeeReg.findOne({email : req.body.email})
        if(!userExist){
             return res.status(422).json({message:"this email is not register"})
        }
        else{
            const regularLogoutDatabase = new regularLogoutData({  
                
                email: req.body.email,              
                date : req.body.date,
                name :userExist.name,
                description:req.body.description
            })
        
            // save user in the database
            regularLogoutDatabase.save(regularLogoutDatabase)
                .then(data => {
                    return res.status(200).json({message:"logout successfully"})
                    // res.send(data)
                    // res.redirect('/add-user');
                })
        }
    }   catch(err) {
                res.status(500).send({
                    message : err.message || "Some error occurred while creating a create operation"
                });
            };
            
  }

  else{
    return res.status(200).json({message:"invalid email"})
}
}


exports.getLoginData =  async (req, res) => {
    try{
        const data = await regularLoginData.find();
       
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


exports.getLogoutData =  async (req, res) => {
    try{
        const data = await regularLogoutData.find();
       
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}




// student form


exports.studentForm = async(req,res)=>{
    // validate request
  
    if(!req.body){
        res.status(400).send({ message : "required all feild"});
        return;
    }
   else if(emailvalidator.validate(req.body.email)){
    try{
        const userExist= await studentReg.findOne({email : req.body.email})
        if(userExist){
             return res.status(422).json({message:"this email is alreay register"})
        }
        else{
            const StudentR = new studentReg({  
                name : req.body.name,
                email: req.body.email,
                mobile : req.body.mobile,
                course : req.body.course,
                fees: req.body.fees,
                finst : req.body.finst,
                sinst : req.body.sinst,
                tinst : req.body.tinst,
                accountno : req.body.accountno,
                ifsccode : req.body.ifsccode,
                classTime : req.body.classTime,
                Address:req.body.Address
                
            })
        
            // save user in the database
            StudentR.save(StudentR)
                .then(data => {
                    return res.status(200).json({message:"Student register successfully"})
                    // res.send(data)
                    // res.redirect('/add-user');
                })
        }
    }   catch(err) {
                res.status(500).send({
                    message : err.message || "Some error occurred while creating a create operation"
                });
            };
            
  }

  else{
    return res.status(200).json({message:"invalid email"})
}
}


//get student 

exports.getStudent =  async (req, res) => {
    try{
        const data = await studentReg.find();
       
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


// email

var nodemailer = require('nodemailer');
exports.getEmail = (req, res)=>{

    const {to, subject, text } = req.body;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'pranita.arenaitech@gmail.com',
          pass: 'ojhujfprjkvxcdvd'
        }
      });
      
      var mailOptions = {
        from: 'pranita.arenaitech@gmail.com',
        to: to,
        subject: subject,
        text: text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
      
        
            if (error) {
                return console.log(error);
            }
            res.status(200).send({ message: "Mail send", message_id: info.messageId });
        });
    
}