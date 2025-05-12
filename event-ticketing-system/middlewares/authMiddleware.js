const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticateUser = async (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) return res.status(401).send('Access denied');


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId);
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};

exports.authenticateAdmin = async (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Make sure the secret is the same
  console.log('Decoded Token:', decoded);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (user.role !== 'admin') return res.status(403).send('Admin access required');
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.status(400).send('Invalid token');
  }
};
