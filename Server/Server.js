const express = require("express");
const app = express();
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
sgMail.setApiKey(
  "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"
);
// Endpoint for handling the send-email POST request
app.post("/send-email", async (req, res) => {
  const { name, mail } = req.body;
  console.log(mail);

  const msg = {
    to: "info@harmonythaiyoga.ca",
    from: "j7089366@gmail.com",
    subject: "Comment",
    text: `The User ${name} Wants to Have Pormotions, his E-mail Is ${mail} .`,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
  // Return a response to the client
  res.json({ message: "Email sent successfully!" });
});
app.post("https://harmonythaiyoga.ca/send-comment", async (req, res) => {
  const { clientComment } = req.body;

  const msg = {
    to: "info@harmonythaiyoga.ca",
    from: "j7089366@gmail.com",
    subject: "Comment",
    text: `You Got A new FeedBack! ${clientComment} .`,
  };

  try {
    await sgMail.send(msg);
    console.log("Comment sent successfully!");
  } catch (error) {
    console.error("Error sending Comment:", error);
  }
  // Return a response to the client
  res.json({ message: "Comment sent successfully!" });
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
