var express=require('express');
var axios = require('axios');
var nodemailer = require("nodemailer");
const { constants } = require('authorizenet/lib/constants');
const onquest_constants = require('../constants');
var app=express();
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "saif.hafeez75@gmail.com",
        pass: "090078601@Abc"
    }
});
var mailOptions;

var config = {
    method: 'post',
    url: 'https://api.sendgrid.com/v3/mail/send',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + onquest_constants.sendGridKey
    }
  };
  
/*------------------SMTP Over-----------------------------*/

const email = {


// Send Email verification code while signup
sendEmailVerificationCode: function (req, res) {
    let body = req.body;
    let code = Math.floor((Math.random() * 1000000) + 1000);
    var data = {};
    data.from = {};
    data.from.email = onquest_constants.onQuestEmailFrom;
    data.from.name = "Welcome to OnQuest";
    data.personalizations = [];
    data.personalizations[0] = {};
    data.personalizations[0].to = [];
    data.personalizations[0].to.push({'email' : body.email});
    data.personalizations[0].dynamic_template_data = {};
    data.personalizations[0].dynamic_template_data.code = code;
    data.template_id = onquest_constants.verificationTemplateId;
    let dataResponse = {
        response: {
            verification_code : code
        }
    };
    config.data = (data);
    return new Promise((resolve, reject) => {
        axios(config)
        .then(function (response) {
            resolve(dataResponse);
        })
        .catch(function (error) {
            reject("unable to send verification email.");
        });
    });   
  },

// Send Email verification code while signup
sendForgotPasswordEmailVerificationCode: function (req, res) {
    let body = req.body;
    let code = Math.floor((Math.random() * 1000000) + 1000);
    var data = {};
    data.from = {};
    data.from.email = onquest_constants.onQuestEmailFrom;
    data.from.name = "Reset Password";
    data.personalizations = [];
    data.personalizations[0] = {};
    data.personalizations[0].to = [];
    data.personalizations[0].to.push({'email' : body.email});
    data.personalizations[0].dynamic_template_data = {};
    data.personalizations[0].dynamic_template_data.code = code;
    data.template_id = onquest_constants.forgotPassword;
    let dataResponse = {
        response: {
            verification_code : code
        }
    };
    config.data = (data);
    return new Promise((resolve, reject) => {
        axios(config)
        .then(function (response) {
            resolve(dataResponse);
        })
        .catch(function (error) {
            reject("unable to send verification email.");
        });
    }); 
  },
  
// Resend Email 
reSendEmailVerification: function (req, res) {
    let body = req.body;
   
    // Validate request
    if (body.email == "") {
        res.status(400).send({
        message: "Email can not be empty!"
        });
    }
    let code = Math.floor((Math.random() * 1000000) + 1000);
    mailOptions={
        to : body.email,
        subject : "Please confirm your Email account",
        html : "<div style='text-align: center;'><img width='100px' src='https://apkdl.in/apkimage/KkYibxbO2CPgilBphqgnZaD8OsBbLEsbdcXKeK9K9mBGvYx16bFx0W6Zh7U2v8YFTZU=rw'><h2>Email Confirmation</h2><p>Thanks for getting started with ONQUEST APP! We need a little more information to complete your registration, including confirmation of your email address. Use below code as a verification code.</p><h3>CODE:"+ code+"</h3><p>Thanks,<br>ONQUEST SUPPORT TEAM</p></div>"
    }
    let data = {
        response: {
            verification_code : code
        }
    };
    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
               res.send(error);
            }else{
                res.send(data);
                }
           });
    });
  },
    
// Welcome Email 
sendWelcomeEmail: function (req, res) {
    let body = req;
    console.log(body); 
    if (body.email == "") {
        res.status(400).send({
        message: "Email can not be empty!"
        });
    }
    var data = {};
    data.from = {};
    data.from.email = onquest_constants.onQuestEmailFrom;
    data.from.name = "Welcome to OnQuest";
    data.personalizations = [];
    data.personalizations[0] = {};
    data.personalizations[0].to = [];
    data.personalizations[0].to.push({'email' : body.email});
    data.personalizations[0].dynamic_template_data = {};
    data.personalizations[0].dynamic_template_data.full_name = body.first_name;
    data.template_id = onquest_constants.welcomeTemplateID;
    config.data = (data);
    return new Promise((resolve, reject) => {
        axios(config)
        .then(function (response) {
            resolve("Welcome Email sent");
        })
        .catch(function (error) {
            reject("unable to send welcome email.");
        });
    });   
  },   
  // Welcome Email 
  sendInvoiceEmail: async function (req, callBack) {
      let body = req;
      console.log(body); 
      var data = {};
      data.from = {};
      data.from.email = onquest_constants.onQuestEmailFrom;
      data.from.name = "Your Grocery Shopping is complete! Here is your receipt. ";
      data.personalizations = [];
      data.personalizations[0] = {};
      data.personalizations[0].to = [];
      data.personalizations[0].to.push({'email' : body.email});
      data.personalizations[0].dynamic_template_data = {};
      data.personalizations[0].dynamic_template_data.full_name = body.name;
      data.personalizations[0].dynamic_template_data.total_cost = body.total_amount;
      var images = JSON.parse(body.payment_invoice.replace(/'/g,'"'));
      for (var i=0; i < images.length; i++) {
        data.personalizations[0].dynamic_template_data['image' + i] = images[i];
      }      
      data.template_id = onquest_constants.paymentGroceryEmail;

      config.data = (data); 
        axios(config)
        .then(function (response) {
            callBack(true, "Invoice Email sent");
        })
        .catch(function (error) {
            callBack(false, "unable to send invoice email.");
        });   
    },
    // Flower delivery invoice Email 
    sendInvoiceEmailFlowerDelivery: async function (req, callBack) {
    let body = req;
    var data = {};
    data.from = {};
    data.from.email = onquest_constants.onQuestEmailFrom;
    data.from.name = "Your Errands are done! Here is your receipt.";
    data.personalizations = [];
    data.personalizations[0] = {};
    data.personalizations[0].to = [];
    data.personalizations[0].to.push({'email' : body.email});
    data.personalizations[0].dynamic_template_data = {};
    data.personalizations[0].dynamic_template_data.full_name = body.name;
    data.personalizations[0].dynamic_template_data.total_cost = body.total_amount;
    var images = JSON.parse(body.payment_invoice.replace(/'/g,'"'));
    for (var i=0; i < images.length; i++) {
      data.personalizations[0].dynamic_template_data['image' + i] = images[i];
    }      
    data.template_id = onquest_constants.paymentFlowerDeliveryEmail;

    config.data = (data); 
      axios(config)
      .then(function (response) {
          callBack(true, "Invoice Email sent");
      })
      .catch(function (error) {
          callBack(false, "unable to send invoice email.");
      });   
  },

  // Rx pickup invoice Email 
  sendInvoiceRxPickup: async function (req, callBack) {
    let body = req;
    var data = {};
    data.from = {};
    data.from.email = onquest_constants.onQuestEmailFrom;
    data.from.name = "Your Errands are done! Here is your receipt.";
    data.personalizations = [];
    data.personalizations[0] = {};
    data.personalizations[0].to = [];
    data.personalizations[0].to.push({'email' : body.email});
    data.personalizations[0].dynamic_template_data = {};
    data.personalizations[0].dynamic_template_data.full_name = body.name;
    data.personalizations[0].dynamic_template_data.total_cost = body.total_amount;
    var images = JSON.parse(body.payment_invoice.replace(/'/g,'"'));
    for (var i=0; i < images.length; i++) {
      data.personalizations[0].dynamic_template_data['image' + i] = images[i];
    }      
    data.template_id = onquest_constants.paymentRxPickupEmail;

    config.data = (data); 
      axios(config)
      .then(function (response) {
          callBack(true, "Invoice Email sent");
      })
      .catch(function (error) {
          callBack(false, "unable to send invoice email.");
      });   
  },
    
 // custom Email 
sendCustomEmail: function (req, res) {
    let body = req;
    console.log(body); 
    if (body.email == "") {
        res.status(400).send({
        message: "Email can not be empty!"
        });
    }
    let code = Math.floor((Math.random() * 1000000) + 1000);
    var data = {};
    data.from = {};
    data.from.email = onquest_constants.onQuestEmailFrom;
    data.from.name = body.subject;
    data.personalizations = [];
    data.personalizations[0] = {};
    data.personalizations[0].to = [];
    data.personalizations[0].to.push({'email' : body.email});
    data.personalizations[0].dynamic_template_data = {};
    data.personalizations[0].dynamic_template_data.full_name = body.first_name;
    data.personalizations[0].dynamic_template_data.message = body.message;
    data.template_id = onquest_constants.customEmail;
    let dataResponse = {
        response: {
            verification_code : code
        }
    };
    config.data = (data);
    return new Promise((resolve, reject) => {
        axios(config)
        .then(function (response) {
            resolve("Email sent");
        })
        .catch(function (error) {
            reject("unable to send email.");
        });
    });   
  },

// meet and greet Email 
meetAndGreetEmail: function (req, res) {
    let body = req[0];
    if (body.email == "") {
        res.status(400).send({
        message: "Email can not be empty!"
        });
    }
    var date = new Date();
    var serviceDate = new Date(date||new Date());
    var currentDay = serviceDate.getDay();
    let meet_and_greet_data = body.meet_greet_date_time;
    if(currentDay == meet_and_greet_data){
        meet_and_greet_data = serviceDate;
    }else{
        meet_and_greet_data = serviceDate.setDate(serviceDate.getDate() + (meet_and_greet_data - 1 - serviceDate.getDay() + 7) % 7 + 1);
        meet_and_greet_data = new Date(meet_and_greet_data).toLocaleDateString("en-US")
    }
    var data = {};
    data.from = {};
    data.from.email = onquest_constants.onQuestEmailFrom;
    data.from.name = "OnQuest";
    data.personalizations = [];
    data.personalizations[0] = {};
    data.personalizations[0].to = [];
    data.personalizations[0].to.push({'email' : body.email});
    data.personalizations[0].dynamic_template_data = {};
    data.personalizations[0].dynamic_template_data.full_name = body.first_name;
    data.personalizations[0].dynamic_template_data.captain_name = body.captain_name;
    data.personalizations[0].dynamic_template_data.meetTime = body.meet_greet_date_time;
    data.template_id = onquest_constants.meetAndGreetEmail;
    config.data = (data);
    return new Promise((resolve, reject) => {
        axios(config)
        .then(function (response) {
            resolve(req);
        })
        .catch(function (error) {
            reject("unable to send email.");
        });
    });   
  },
}



module.exports = email;
