const  prisma = require('../models/prisma');


const getDoctorBySpeciality = async (req,res)=>{
    
    try {
      const sp =await prisma.speciality.findUnique( {where: {
        speciality: req.speciality}},)
        res.json(sp||null)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'SERVER ERROR' });
    }
  
  }