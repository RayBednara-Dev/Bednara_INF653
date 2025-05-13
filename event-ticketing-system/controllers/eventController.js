const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
    try {
      const { category, date } = req.query;
      
      let filter = {};
  
      if (category) {
        filter.category = category;
      }
      if (date) {
        const parsedDate = new Date(date); 
        const nextDay = new Date(parsedDate.setDate(parsedDate.getDate() + 1));
        filter.date = {
            //creates a filter that surrounds the date with a full 24 hour period so there is no time conflicts if you're looking at a particular 
          $gte: new Date(date), 
          $lt: nextDay 
        };
      }
      const events = await Event.find(filter);
      res.status(200).json(events);
    } catch (err) {
      res.status(500).send('Server error');
    }
  };

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).send('Event not found');
    res.status(200).json(event);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.createEvent = async (req, res) => {
  const { title, description, category, venue, date, time, seatCapacity, price, bookedSeats } = req.body;
  try {
    const newEvent = new Event({ title, description, category, venue, date, time, seatCapacity, price, bookedSeats });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.updateEvent = async (req, res) => {
  const { title, description, category, venue, date, time, seatCapacity, price } = req.body;
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).send('Event not found');
    if (event.bookedSeats > seatCapacity) return res.status(400).send('Cannot reduce seat capacity below booked seats');
    
    event.title = title || event.title;
    event.description = description || event.description;
    event.category = category || event.category;
    event.venue = venue || event.venue;
    event.date = date || event.date;
    event.time = time || event.time;
    event.seatCapacity = seatCapacity || event.seatCapacity;
    event.price = price || event.price;
    await event.save();
    res.status(200).json(event);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).send('Event not found');
    if (event.bookedSeats > 0){
       return res.status(400).send('Cannot delete event with bookings');
      } else {
       await Event.findByIdAndDelete(req.params.id);
       res.status(200).send('Event deleted');
      }
  } catch (err) {
    res.status(500).send('Error Deleting Event');
  }
};