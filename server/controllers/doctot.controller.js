const  prisma = require('../models/prisma');

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await prisma.user.findMany({
            where :{role:"doctor"},
            include:{
            doctor:true,
         speciality:true
            
    
            }
        });
        res.status(200).json(doctors);
    } catch (error) {
       console.log(error);
        res.status(500).json({ error: 'SERVER ERROR' });
    }
}

const FilterDoctor = async (req, res) => {
    try {
        prisma.doctor.findUnique( {where: {
            speciality: req.speciality}},)
            res.json(sp||null)
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'SERVER ERROR' });
        }
    }



module.exports = {
    getAllDoctors,
    FilterDoctor
};
