var nodemailer = require('nodemailer');
var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abhinav-namdev@gmail.com',
    pass: 'abhi@45215'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email via Node.js',
  text: 'That was easy!'
};
  
mail.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});