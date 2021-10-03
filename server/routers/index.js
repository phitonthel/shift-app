const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const shiftController = require('../controllers/shiftController')

router.get('/', (req, res) => {
  res.send('<h1>Welcome to Staffany server!</h1>')
})

// Shift
router.get('/shift', shiftController.getAll)
router.post('/shift', shiftController.create)
router.put('/shift/:id', shiftController.update)
router.delete('/shift/:id', shiftController.delete)
router.put('/shift/publish/all/:action', shiftController.publishAll)
router.put('/shift/publish/:id', shiftController.publish)
router.put('/shift/unpublish/:id', shiftController.unpublish)

module.exports = router