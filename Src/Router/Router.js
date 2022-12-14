const express = require('express');
const route = express.Router()
const controller = require('../Create/Forms');



route.post('/registration', controller.UserReg);

route.post('/login', controller.UserLogin);
route.post('/venderadd', controller.venderAdding);
route.post('/venderdetails', controller.getVenderData);
route.post('/bulkPaymentList', controller.BulkPaylist);
route.post('/getbulkPaymentListdata', controller.getBulkPayaData);
route.delete('/venderdelete/:id', controller.deleteVender);
route.post('/customersadd', controller.CustomersAdding);
route.post('/customersdetails', controller.getCustomersData);
route.delete('/customersdelete/:id', controller.deleteCustomers);



//company profile 

route.post('/employeereg', controller.employeeRegistration);
route.post('/employeelogin', controller.employeeLogin);
route.get('/employeedata', controller.getEmployeeData);

route.post('/employeeregularLogin', controller.regularLogin);
route.get('/logindata', controller.getLoginData);



route.post('/employeeregularLogout', controller.regularLogoutReport);
route.get('/logoutndata', controller.getLogoutData);



// student form
route.post('/studentform', controller.studentForm);
route.get('/ggetstudentdata', controller.getStudent);
route.post('/api/getEmail', controller.getEmail);
route.post('/getstudentinformation', controller.getStudentDataemail);
route.post('/examform', controller.studentExamForm);
route.get('/getstudenteexam', controller.getStudentexam);
route.patch('/update/:id', controller.updateStudent);

module.exports = route;