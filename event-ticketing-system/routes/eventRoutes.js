const express = require('express');
const router = express.Router();
const { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const { authenticateAdmin } = require('../middlewares/authMiddleware');

router.get('/events', getAllEvents);
router.get('/events/:id', getEventById);
router.post('/events', authenticateAdmin, createEvent);
router.put('/events/:id', authenticateAdmin, updateEvent);
router.delete('/events/:id', authenticateAdmin, deleteEvent);

module.exports = router;
