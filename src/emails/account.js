const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//     to: 'chunfu.zhang@wealthwave.com',
//     from: 'chunfu.zhang@wealthwave.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you.'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chunfu.zhang@wealthwave.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`    
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chunfu.zhang@wealthwave.com',
        subject: 'Goodby and Good Luck!',
        text: `Sorry to see you go, ${name}. Let me know what I could have done to keep you as a customer and if we could be of any help in the future.`    
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}