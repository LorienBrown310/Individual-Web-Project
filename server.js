const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname)); // Serve static files from the root directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Contact.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const {subject, name, email, message } = req.body; // access form data
    // Add validation logic here
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'milestoneproject6@gmail.com',
            pass: 'dpbxnoaqdxwgrqsc' // Use an app-specific password or environment variable for security
        }
});

const mailOptions = {
    from: email,
    to: 'milestoneproject6@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return res.status(500).send('Error sending email');
    }
    res.send('Email sent successfully!');
});
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});