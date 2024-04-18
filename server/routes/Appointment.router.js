
const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/Appointment.controller');

router.get('/', AppointmentController.getAllAppointment);

router.get('/:id', AppointmentController.getAppointmentById);

router.post('/', AppointmentController.createAppointment);



module.exports = router;
