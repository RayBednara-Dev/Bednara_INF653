const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send('User already exists');
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
    console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid credentials');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');
    
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);
    console.log(user);
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
};