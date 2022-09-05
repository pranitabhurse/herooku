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
module.exports = route;