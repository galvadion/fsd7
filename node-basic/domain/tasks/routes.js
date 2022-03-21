const express = require('express')
const router = express.Router();
const TaskController = require('./controller')

router.get('/',TaskController.getTasks)

router.post('/',TaskController.addTask)

router.put('/',TaskController.updateTask)

router.delete('/:id',TaskController.deleteTask)

module.exports = router;