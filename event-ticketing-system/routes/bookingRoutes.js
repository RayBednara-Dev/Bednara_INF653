const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/bookingController');
const { authenticateUser } = require('../middlewares/authMiddleware');

router.post('/bookings', authenticateUser, createBooking);

module.exports = router;