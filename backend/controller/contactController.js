import nodemailer from 'nodemailer'

const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
          <h3>You've got a new message!</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
    };

    await transporter.sendMail(mailOptions);

    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thanks for contacting Arsh Agarwal!`,
      html: `
          <p>Hi ${name},</p>
          <p>Thanks for reaching out! 🙌</p>
          <p>I’ve received your message and will get back to you as soon as possible.</p>
          <br/>
          <p>– Arsh Agarwal</p>
        `,
    };

    await transporter.sendMail(autoReply);

    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
}

export { handleContactForm };