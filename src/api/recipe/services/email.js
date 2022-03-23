'use strict';

/**
 * email service.
 */

 const nodemailer = require('nodemailer');

 // Create reusable transporter object using SMTP transport.
 const transporter = nodemailer.createTransport({
   service: 'Gmail',
   auth: {
     user: 'user@gmail.com',
     pass: 'password',
   },
 });
// when finish, run yarn strapi services:list. You should see api::recipe.email
// api::recipe.email  - use this inside your controller
// strapi.service('api::recipe.email') .send('welcome@mysite.com', user.email, 'Welcome', '...');


 module.exports = {
   send: (from, to, subject, text) => {
     // Setup e-mail data.
     const options = {
       from,
       to,
       subject,
       text,
     };

     // Return a promise of the function that sends the email.
     return transporter.sendMail(options);
   },
 };
