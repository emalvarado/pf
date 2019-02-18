const express = require('express')
const nodemailer = require("nodemailer")
const credentials = require('../credentials')
const PORT = 4000

const app = express()
app.use(express.json)

//nodemailer

app.post('/send', async (req, res) => {
  // console.log(credentials.yahooEmail)
  // console.log(req.body)
  const output = `
  <p> You have  new contact request</p>
  <h3>Contact Details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p> ${req.body.message}</p>
  `
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: credentials.yahooEmail.user,
      pass: credentials.yahooEmail.pass
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: credentials.yahooEmail.user , // sender address
    to: credentials.yahooEmail.user, // list of receivers
    subject: "EA portfolio Contact Request", // Subject line
    text: "", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  res.status(200).send({message: 'Email has been sent'})
})




app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})