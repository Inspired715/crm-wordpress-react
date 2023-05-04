const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gatewayagencydev@gmail.com',
        pass: 'jpcakespsoujbzpr'
    }
});

module.exports = transporter;