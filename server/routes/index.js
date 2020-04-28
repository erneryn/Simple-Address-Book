const Router  = require('express').Router()
const contactController = require('../controller')

Router.get('/contact',contactController.findAllContact)
Router.get('/contact/:id',contactController.findOneContact)
Router.post('/contact',contactController.postContact)
Router.put('/contact/:id',contactController.putContact)
Router.delete('/contact/:id',contactController.deleteContact)


module.exports = Router