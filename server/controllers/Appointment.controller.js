
const  prisma = require('../models/prisma');

const createAppointment = async (req, res) => {
    const { appointmentTime, status, paymentStatus, appointmentDepartment, doctorId, userId } = req.body;
    try {
        const appointment = await prisma.appointment.create({
            data: {
              appointmentTime,
              status,
              paymentStatus,
              appointmentDepartment,
              doctor: {
                connect: { id: doctorId } // Correctly reference doctor here
            },
            user: {
                connect: { id: userId }
            }
    }})
        res.status(200).json(appointment);
    } catch (error) {
       console.log(error);
        res.status(500).json({ error: 'SERVER ERROR' });
    }
}
const getAllAppointment = async (req, res) => {
    try {
        const appointments = await prisma.appointment.findMany({
            include: {
                doctor: true,
                user: true
              }
            })
            res.status(200).json(appointments);
        } catch (error) {
       console.log(error);
        res.status(500).json({ error: 'SERVER ERROR' });
    }
}

const getAppointmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await prisma.appointment.findUnique({
            where: {id:parseInt(id)},
            include: {
                doctor: true,
                user: true
              }
            })
            res.status(200).json(appointment);
        } catch (error) {
       console.log(error);
        res.status(500).json({ error: 'SERVER ERROR' });
    }
}
module.exports = {
    createAppointment,   
    getAllAppointment,
    getAppointmentById
};