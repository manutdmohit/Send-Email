const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
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

const sendMail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'test@gmail.com',
    // Change to your recipient
    from: 'testingforrevolution@gmail.com', // Change to your verified sender
    subject:
      'Lucky Person getting email from me. This is email testing from send grid.',
    html: "<strong>Let's make 2070/BEX/ACEM great again. Stay Safe.  </strong>",
  };

  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendMail;
