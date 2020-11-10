const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const config = require('./../sendgrid.env')

module.exports.mail =  async (req, res) => {
  try {
    const transporter = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
      })
    );

    
    const info = await transporter.sendMail({
      from: `"${req.body.name} 👻" <${req.body.email}> EASYLEARN`, 
      to: "hocavo8438@peevr.com",
      subject: req.body.subject, 
      text: "hello there", 
      html: req.body.msg
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
    res.render('sent')
  } catch (err) {
    console.log('Errors occurred, failed to deliver message');

        if (err.response && err.response.body && err.response.body.errors) {
            err.response.body.errors.forEach(error => console.log('%s: %s', error.field, error.message));
        } else {
            console.log(err);
        }
    res.status(500).json("message not sent");
  }
};