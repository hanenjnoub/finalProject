const express=require("express")
const connectDB=require("./config/connectDB")
const app=express()
const path=require("path")
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require("dotenv").config();
app.use(express.json())
app.use(bodyParser.json());
connectDB()
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.PASS
  }
});
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;
  const mailOptions = {
    from: 'hanenjnoub@gmail.com',
    to: to,
    subject: subject,
    text: text
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Une erreur est survenue lors de l\'envoi de l\'e-mail.');
    } else {
      console.log('E-mail envoyé : ' + info.response);
      res.status(200).send('E-mail envoyé avec succès.');
    }     
  });
});
app.use("/api/projet",require('./routes/medcontact'))
app.use("/api/booking",require('./routes/Book'))
app.use("/api/uploads", require("./routes/uploadRoute"))
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

const port=5000
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
    
    })
   
