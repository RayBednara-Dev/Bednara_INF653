const nodemailer = require('nodemailer');

exports.sendConfirmationEmail = async (userEmail, event, quantity) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD

    }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: 'Booking Confirmation',
    text: `Your booking for ${event.title} has been confirmed. 
           Quantity: ${quantity}, Total Price: ${event.price * quantity}`
  };

  try {
    console.log(mailOptions);
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log('Error sending email:', err);
  }
};
