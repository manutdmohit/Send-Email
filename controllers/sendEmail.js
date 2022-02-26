const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: process.env.HOST_NAME,
    port: process.env.PORT_NUMBER,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  let info = await transporter.sendMail({
    from: '"Revolution 2022" <revolution2022@gmail.com',
    to: 'bar@example.com',
    subject: 'Hello',
    html: '<h2>Sending Emails with Node.js </h2>',
  });

  res.json(info);
};
