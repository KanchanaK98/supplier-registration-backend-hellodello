const nodemailer = require("nodemailer");
exports.sendEmail = async (req,res) => {
    const {email} = req.body; 

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: "465",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    secure : true
    });
  // console.log(process.env.EMAIL_USER);
  // console.log(process.env.EMAIL_PASS);
  // console.log(email);
    const options = {
      from: process.env.EMAIL_USER,
      to: email,
      replyTo: email,
      subject: "Welcome to the HELLO DELLO",
    //   html: req.message,
    html: "Hello World !",
    };
  
    // Send Email
    await transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  };

