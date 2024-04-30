const nodemailer = require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');


let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    secure:false,
    auth: {
        user: process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
    }
});


async function sendMail({ from, to, subject,text,html}){
   
  
    console.log("helllooooasasoo")

    // try {
        let info = await transporter.sendMail({
            from: `Inshare <${from}>`,
            to,
            subject,
            text,
            html
        });
        console.log('Email sent:', info);
    // } catch (error) {
    //     console.error('Error sending email:', error);
    // }
    
}




module.exports = sendMail

// const nodemailer = require("nodemailer");
// const { callbackPromise } = require("nodemailer/lib/shared");


// //   create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: "smtp-relay.brevo.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: "user@brevo.com", // generated brevo user
//       pass: "xxxxxxxxx", // generated brevo password
//     },
//     tls: {
//         // do not fail on invalid certs
//         rejectUnauthorized: false,
//       },
//   });


// async function main() {
  

//   transporter.verify(function (error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"mauricio@brevo.com', // sender address
//     to: "john@domain.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello {{ contact.FIRSTNAME }} , This is an SMTP message with customizations", // plain text body
//   },callbackPromise.error);

//   console.log("Message sent: %s", info);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// }

// main().catch(console.error);

// module.exports = main