const nodemailer = require("nodemailer");
const fs = require('fs')
const path = require("path");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

async function sendMail(email) {
    
  const templatePath = path.join(__dirname, "email_template.html");
  const htmlContent = fs.readFileSync(templatePath, "utf8");
  const info = await transporter.sendMail({
    from: process.env.EMAIL, 
    to: email, 
    subject: "Shopping Cart",
    html: htmlContent
  });
  
}

module.exports = {sendMail}
