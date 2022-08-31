const express = require('express');
const route = express.Router()
const controller = require('../Create/Forms');



route.post('/registration', controller.UserReg);

route.post('/login', controller.UserLogin);
route.post('/venderadd', controller.venderAdding);
route.post('/venderdetails', controller.getVenderData);
route.post('/bulkPaymentList', controller.BulkPaylist);
route.delete('/venderdelete/:id', controller.deleteVender);
module.exports = route;