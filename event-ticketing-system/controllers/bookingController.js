const Booking = require('../models/Booking');
const Event = require('../models/Event');
const QRCode = require('qrcode');
const { sendConfirmationEmail } = require('../utils/sendEmail');

exports.createBooking = async (req, res) => {
  const { eventId, quantity } = req.body;
  try {
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).send('Event not found');
    if (event.bookedSeats + quantity > event.seatCapacity) return res.status(400).send('Not enough seats available');
    
    const newBooking = new Booking({
      user: req.user.id,
      event: eventId,
      quantity
    });
    
    event.bookedSeats += quantity;
    await event.save();

     const qrCode = await QRCode.toDataURL(`Booking ID: ${newBooking._id}`);
     newBooking.qrCode = qrCode;
     await newBooking.save();

    sendConfirmationEmail(req.user.email, event, quantity);

    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).send('Server error');
  }
};