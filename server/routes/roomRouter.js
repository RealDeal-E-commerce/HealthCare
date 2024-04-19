const express = require('express');
const router = express.Router();
const {
    createRoom,
    getAllRoomsByUserId,
    createMessage,
    getAllMessagesByUserId
}= require('../controllers/roomController');

router.post('/:user1/:user2', createRoom);
router.get('/:id', getAllRoomsByUserId);
router.post('/createmsg',createMessage);
router.get('/messages/:id', getAllMessagesByUserId);


module.exports=router;