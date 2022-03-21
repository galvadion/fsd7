const express = require('express');
const router = express.Router();
const GreetingController = require('./controller')

router.get('/',GreetingController.getGreet)

router.get('/:user',GreetingController.getGreet)

module.exports = router;