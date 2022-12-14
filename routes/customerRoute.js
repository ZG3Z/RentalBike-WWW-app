const express = require('express');
const router = express.Router();
const customerControler = require('../controllers/customerControllers');

router.get('/', customerControler.showCustomerList);
router.get('/add', customerControler.showAddCustomerForm);
router.get('/edit/:customerId', customerControler.showEditCustomerForm);
router.get('/details/:customerId', customerControler.showCustomerDetails);

router.post('/add', customerControler.addCustomer);
router.post('/edit', customerControler.updateCustomer);
router.get('/delete/:customerId', customerControler.deleteCustomer);

module.exports = router;