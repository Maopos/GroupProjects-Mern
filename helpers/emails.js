import nodemailer from "nodemailer";

export const registerEmail = async (data) => {
  const { name, email, token } = data;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //   email info
  const info = await transport.sendMail({
    from: '"GroupProject - Manage your Projects" <accounts@groupproject.com> ',
    to: email,
    subject: "GroupProject - Confirm email...",
    text: "Please confirm your GroupProject account!",
    html: `<div style="font-family: sans-serif; color: rgb(0, 64, 107); font-size: large;"><p>Hi ${name}, welcome to your Project manager.</p>
    <p>Your account is almost ready, you just have to confirm it by clicking on the following link:</p>
    <a href='${process.env.FRONTEND}/confirm/${token}'>Confirm your account here!</a>
    <p>If you did not create this account please ignore this message</p></div>`,
  });
};

export const recoveryEmail = async (data) => {
  const { name, email, token } = data;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //   email info
  const info = await transport.sendMail({
    from: '"GroupProject - Manage your Projects" <accounts@groupproject.com> ',
    to: email,
    subject: "GroupProject - Reset your password...",
    text: "Reset your password...",
    html: `<div style="font-family: sans-serif; color: rgb(0, 64, 107); font-size: large;"><p>Hi ${name}, you have requested to reset your password.</p>

    <p>Follow the link below to reset your password:</p>

    <a href='${process.env.FRONTEND}/forgot-password/${token}'>Reset your password here!</a>
    <p>If you did not request this, please ignore this message.</p></div>`,
  });
};
