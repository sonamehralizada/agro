import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: "sonamehralizada@gmail.com",
    pass: "100198sonaGmail"
  }
});
