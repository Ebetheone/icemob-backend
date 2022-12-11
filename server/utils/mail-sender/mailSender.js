const nodemailer = require("nodemailer");
// Create a SMTP transport object

const mailSender = async (message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "store.icemob@gmail.com",
      pass: process.env.NODE_MAILER_SECRET,
    },
  });
  try {
    const param = {
      from: "info@icemob.mn",
      to: message.email,
      subject: message.subject,
      html: message.content,
    };
    console.log(message.content);
    await transporter.sendMail(param);
    return true;
  } catch (err) {
    console.log("--------MAIL.SENDER.ERROR---------", err.message);
    return false;
  }
};

module.exports = {
  mailSender,
};
