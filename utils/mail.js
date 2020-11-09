const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

module.exports.mail =  async (req, res) => {
  try {
    const transporter = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
      })
    );

    
    const info = await transporter.sendMail({
      from: `"${req.body.name} 👻" <${req.body.email}> EASYLEARN`, 
      to: "enalsy22@gmail.com",
      subject: req.body.subject, 
      text: "", 
      html: req.body.message
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
    res.send("OK");
  } catch (error) {
    console.log(error);
    res.status(500).json("message not sent");
  }
};