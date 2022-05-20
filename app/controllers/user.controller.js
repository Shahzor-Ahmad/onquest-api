const express = require('express');
const user = require("../models/user.model.js");
const validate = require("../services/general_utils.js");
var crypto = require('crypto');
const mailer = require("../services/mailer.js");

var verification_code;

/**
 * Get email and password through request.
 * Check email if it exists in database.
 * Returns all data of resident.
 * @param req user data object.
 * @param res data object which returns to user.
 */
exports.singIn = (req, res) => {
  let body = req.body;

  // Validate request
  if (body.username == "" || body.password == "") {
    res.status(400).send({
      message: "username and password can not be empty!"
    });
  }

  // Validate email 
  validate.validateEmail(body.username).then((result) => {
    if(!result){
      res.status(400).send({
        message: "Invalid email"
      });
    }
  });

  //Encrypt password with sha1
  body.password = crypto.createHash('sha1').update(body.password).digest('hex');

  try {
      user.authenticateUser(body).then((result) => {
      if (result) {
        if (result.length == 0 ) {
          res.status(404).send({
            message: `Invalid password or email.`
          });
        } else {
          user.getUserById(result[0].id).then((result) => {
              var date = new Date();
              var service_day = result[0].user_profile_service_day;
              var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
              var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
              var serviceDate = new Date(date||new Date());
              serviceDate.setDate(serviceDate.getDate() + (service_day - 1 - serviceDate.getDay() + 7) % 7 + 1);
              var dayName = days[serviceDate.getDay()];
              var monthName = mlist[serviceDate.getMonth()];
              var nextDate = serviceDate.getDate();
              var year = serviceDate.getFullYear();
              let data ={};
              data.response = result;
              data.service_day = dayName +', '+ monthName+' '+nextDate+', '+year;
              data.message = "Successfully LoggedIn.";
              res.send(data);
          });
        }
     } 
  });
} catch (error){
    res.status(500).send({
    message: error
  });
}
};


/**
 * Get id of user through request.
 * Check id if it exists.
 * Returns all data of user.
 * @param req user data object.
 * @param res data object which returns to user.
 */
exports.getUserById = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  try {
      user.getUserById(body.user_id).then((result) => {
      if (result) {
        if (result.length == 0 ) {
          res.status(404).send({
            message: `Not found any user.`
          });
        } else {
            let data ={};
            data.response = result;
            res.send(data);
        }
     } 
  });
} catch (error){
    res.status(500).send({
    message: error
  });
}
};


/**
 * Delete  user through request.
 * Delete user form user table.
 * @param req user data object.
 * @param res data object which returns to user.
 */
exports.deleteUser = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  try {
      user.deleteUser(body.user_id).then((result) => {
      if (result) {
        if (result.affectedRows == 0) {
          res.status(404).send({
            message: `User not deleted.`
          });
        } else {
            let data = {};
            data.message = "User deleted successfully.";
            res.send(data);
        }
     } 
  });
} catch (error){
    res.status(500).send({
    message: error
  });
}
};


/**
 * Get email of user through request.
 * Check email if it exists.
 * Returns all data of user.
 * @param req user data object.
 * @param res data object which returns to user.
 */
exports.getUserByEmail = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.email == "") {
    res.status(400).send({
      message: "email can not be empty!"
    });
  }


  try {
      user.getUserByEmail(body).then((result) => {
      if (result) {
        if (result.length == 0 ) {
          res.status(404).send({
            message: `Not found any user.`,
            userFound: false
          });
        } else {
            let data ={};
            data.response = result;
            data.userFound = true
            res.send(data);
        }
     } 
  });
} catch (error){
    res.status(500).send({
    message: error
  });
}
};


/**
 * Get user data through request.
 * Check email if it exists.
 * Create user in user table.
 * Create user in userProfile table with user id.
 * @param req user data object.
 * @param res data object which to returns to user.
 */
exports.create = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.first_name == "" || body.last_name == "" || body.phone == "" || body.password == "") {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Validate email
  validate.validateEmail(body.email).then((result) => {
    if(!result){
      res.status(400).send({
        message: "Invalid email"
      });
    }
  });

  //Encrypt password with sha1
  var hash = crypto.createHash('sha1').update(body.password).digest('hex');

  // User modal
  let userData = {email:body.email, password:hash, building_id:body.building_id, user_type_id:body.user_type_id, phone:body.phone}

  // User profile data modal
  let userProfile = {user_id:"",first_name:body.first_name, last_name:body.last_name, phone:body.phone, profile_picture_url:"",birthday:"", street_name:"", unit_number:"", city:"", state:"",zip_code:"", any_pets:"", emergency_contact_first_name:"", emergency_contact_last_name:"",emergency_contact_phone_number:"",emergency_contact_relationship:"",mates:"",favorite_holiday:"",favorite_candy:"",favorite_cookie:"",favorite_beer_wine:"",hobbies:"",favorite_sport:"",other_information:"",user_profile_service_day:"",notes:""}
  user.getLocationByCode(body.building_id).then((result) => {
    if (result.length != 0 ) {
      userProfile.street_name = result[0].address_line1;
      userProfile.city = result[0].address_city;
      userProfile.state = result[0].state;
      userProfile.zip_code = result[0].address_zip;
  }
  });
  // Save user in the database
  try {
    //Get user by email
    user.getUserByEmail(userData).then((result) => {
      if(result.length == 0){
        mailer.sendEmailVerificationCode(req, res).then((result) => {
          verification_code = result.response.verification_code;
          user.creatUser(userData).then((result) => {
            userProfile.user_id = result[0].id;
            user.createUserProfile(userProfile).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User not created.`
              });
            } else {
              let data ={};
              data.response = result;
              data.message = "Successfully SignedUp.";
              data.verification_code = verification_code;
              res.send(data);
            }
          }
        });
      });
    }).catch((result) => {
      res.send({
        message: result
      });
    });
    }else {
      res.send({
        message: `This email already exist.`
      });
  }
});
} catch (error){
    res.status(500).send({
    message: error
  });
}
};


/**
 * Get user profile data through request.
 * Update row in userProfile table with user id.
 * @param req user data object.
 * @param res data object which to returns to user.
 */
exports.createUserProfile = (req, res) => {
  let body = req.body;
  meetGreetFlag = false;
  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }
  if(body.user_type_id == 3 || body.user_type_id == 2){
    // Captain/concierge profile data modal
    var additional_building = body.additional_building;
    var userProfile = {user_id:body.user_id,first_name:body.first_name, last_name:body.last_name,birthday:body.birthday, phone:body.phone, street_name:body.street_name, unit_number:body.unit_number, city:body.city, state:body.state,zip_code:body.zip_code, profile_picture_url:body.profile_picture_url}
   }else if(body.meet_greet_date_time || body.meet_greet_status || body.assigned_captain_id){
    // Resident profile data modal
    if(body.meet_greet_status != 'completed' && body.meet_greet_date_time != "" && body.meet_greet_date_time != null){
      meetGreetFlag = true;
    }
    var userProfile = {user_id:body.user_id,first_name:body.first_name, last_name:body.last_name,birthday:body.birthday, phone:body.phone, street_name:body.street_name, unit_number:body.unit_number, city:body.city, state:body.state,zip_code:body.zip_code, any_pets:body.any_pets, emergency_contact_first_name:body.emergency_contact_first_name, emergency_contact_last_name:body.emergency_contact_last_name, emergency_contact_phone_number:body.emergency_contact_phone_number, emergency_contact_relationship:body.emergency_contact_relationship, mates:body.mates, favorite_holiday:body.favorite_holiday, favorite_candy:body.favorite_candy, favorite_cookie:body.favorite_cookie, favorite_beer_wine:body.favorite_beer_wine, hobbies:body.hobbies, favorite_sport:body.favorite_sport, other_information:body.other_information,notes:body.notes,profile_picture_url:body.profile_picture_url,user_profile_service_day:body.user_profile_service_day,meet_greet_status:body.meet_greet_status,meet_greet_date_time:body.meet_greet_date_time,assigned_captain_id:body.assigned_captain_id};
   }
   else{
    var userProfile = {user_id:body.user_id,first_name:body.first_name, last_name:body.last_name,birthday:body.birthday, phone:body.phone, street_name:body.street_name, unit_number:body.unit_number, city:body.city, state:body.state,zip_code:body.zip_code, any_pets:body.any_pets, emergency_contact_first_name:body.emergency_contact_first_name, emergency_contact_last_name:body.emergency_contact_last_name, emergency_contact_phone_number:body.emergency_contact_phone_number, emergency_contact_relationship:body.emergency_contact_relationship, mates:body.mates, favorite_holiday:body.favorite_holiday, favorite_candy:body.favorite_candy, favorite_cookie:body.favorite_cookie, favorite_beer_wine:body.favorite_beer_wine, hobbies:body.hobbies, favorite_sport:body.favorite_sport, other_information:body.other_information,notes:body.notes,profile_picture_url:body.profile_picture_url, mate_first_name:body.mate_first_name, mate_last_name:body.mate_last_name, mate_relationship:body.mate_relationship, mate_birthday:body.mate_birthday, mate_phone:body.mate_phone};

   }
  
  // Update user profile data
  try {
        user.updateUserProfile(userProfile, body.building_id, additional_building, body.user_type_id).then((result) => {
          if (result) {
             if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User profile not updated.`
              });
            } else {
              var userData = result;
              if(meetGreetFlag){
                user.getUserById(userData[0].assigned_captain_id).then((captainData) => {
                  userData[0].captain_name = captainData[0].first_name + " " + captainData[0].last_name;
                  mailer.meetAndGreetEmail(userData).then((result) => {
                    let data ={};
                    data.response = result;
                    res.send(data);
                  });
                });
              }else{
                let data ={};
                data.response = result;
                res.send(data);
              }
            }
          }
        });
} catch (error){
    res.status(500).send({
    message: error
  });
}
};



/**
 * Get user profile data through request.
 * Update row in userProfile table with user id.
 * @param req user data object.
 * @param res data object which to returns to user.
 */
exports.forgotPassword = (req, res) => {

  // Validate request
  if (!req || req.body.email == "") {
    res.status(400).send({
      message: "Email can not be empty!"
    });
  }
  
  // Update user profile data
  try {
        //Get user by email
    user.getUserByEmail(req.body).then((user) => {
      if(user.length != 0){
        console.log('hello');
        mailer.sendForgotPasswordEmailVerificationCode(req, res).then((result) => {
          verification_code = result.response.verification_code;
              if (verification_code) {
                if (verification_code.length == 0 ) {
                  res.status(404).send({
                  message: `Verification code not generated.`
              });
            } else {
              let data ={};
              data.response = user;
              data.verification_code = verification_code;
              res.send(data);
            }
          }
        });
    }else {
      res.send({
      message: `This email not exist.`
    });
  }
});
} catch (error){
    res.status(500).send({
    message: error
  });
}
};



/**
 * Get user profile data through request.
 * Update row in userProfile table with user id.
 * @param req user data object.
 * @param res data object which to returns to user.
 */
exports.verifyUser = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "" || body.user_verified == "") {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  
  // Update user profile data
  try {
        user.verifyUser(body).then((result) => {
          user.getUserById(body.user_id).then((result) => {
            let userData = result[0];
            mailer.sendWelcomeEmail(userData, res).then((result) => {
          if (result) {
             if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User not updated.`
              });
            } else {
              let data ={};
              data.response = result;
                res.send(data);
            }
          }
        });
      });
     });
} catch (error){
    res.status(500).send({
    message: error
  });
}
};

/**
 * Get terms and conditions through request.
 * Get terms and conditions data from terms_&_conditions table with user id.
 * @param req terms and conditions code object.
 * @param res data object which to returns to user.
 */
exports.getTermsAndConditions = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.property_code == "") {
      res.status(400).send({
          message: "Content can not be empty!"
      });
  }

  // Get building service
  try {
      user.getTermsAndCondition().then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Terms and condition not found.`,
                  valid_code: "false"
              });
            } else {
                let data ={};
                data.response = result;
                res.send(data);
            }
          }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};

/**
* Get Captain id through request.
* Assign Captain to location.
* @param req Captain data object.
* @param res data object which returns to user.
*/
exports.assignCaptain = (req, res) => {
let body = req.body;

// Validate request
if (!body || body.Captain_id == "" || body.building_id == "") {
  res.status(400).send({
    message: "Captain/building id can not be empty!"
  });
}

// Assign captain to location
try {
  user.assignCaptainToLocation(body).then((result) => {
    let id = result.insertId;
    user.getCaptainByIdWithLocation(body.captain_id).then((result) => {
        if (result) {
          if (result.length == 0 ) {
            res.status(404).send({
            message: `Captain not assigned to location. Please try again letter.`
        });
      } else {
          let data ={};
          data.response = result;
          res.send(data);
      }
    }
  });
});
  } catch (error){
  res.status(500).send({
  message: error
});
}
};


/**
 * Get residents data from user table.
 * @param req resident code object.
 * @param res data object which to returns to user.
 */
exports.getAllResidents = (req, res) => {
  let body = req.body;

  // Get residents
  try {
      user.getAllResidents().then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Residents not found.`,
              });
            } else {
                let data ={};
                data.response = result;
                res.send(data);
            }
          }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};



/**
 * Get captains/Concierges through request.
 * Get captains/Concierges data from user table with user id.
 * @param req captains/Concierges code object.
 * @param res data object which to returns to user.
 */
exports.getAllCaptainsConcierges = (req, res) => {
  let body = req.body;

  // Get captains
  try {
      user.getCaptains().then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Captains/Concierges not found.`,
              });
            } else {
                let data ={};
                data.response = result;
                res.send(data);
            }
          }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};


/**
 * Get users through request.
 * Get users data from user table with user id.
 * @param req users code object.
 * @param res data object which to returns to user.
 */
exports.getAllUsers = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.property_code == "" || body.user_type == "") {
    res.status(400).send({
        message: "Property code or user type can not be empty!"
    });
  }

  // Get users 
  try {
      user.getAllUsers(body).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Users not found.`,
              });
            } else {
                let data ={};
                data.response = result;
                res.send(data);
            }
          }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};


/**
 * Get users profiles through request.
 * Get users data from user table with user id.
 * @param req users code object.
 * @param res data object which to returns to user.
 */
exports.getUserAllProfiles = (req, res) => {
  let body = req.body;
  // Validate request
    if (!body || body.user_id == "" ) {
      res.status(400).send({
        message: "User id can not be empty!"
      });
    }
  // Get building service
  try {
    var data = {};
      user.getPetProfile(body.user_id).then((result) => {
        data.pet_profile = result;
        user.getHouseKeepingProfile(body.user_id).then((result) => {
          data.house_keeping = result;
          user.getGroceryProfile(body.user_id).then((result) => {
            data.grocery_shoping = result;
            user.getRxPickupProfile(body.user_id).then((result) => {
              data.rx_pickup = result;
              if (data) {
                if (data.length == 0 ) {
                  res.status(404).send({
                  message: `Profiles not found.`,
              });
            } else {
                //let data ={};
                res.send(data);
            }
          }
      });
    });
  });
});
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};


/**
 * Get captain profile data through request.
 * Update row in captain user table with user id.
 * @param req user data object.
 * @param res data object which to returns to user.
 */
exports.updateCaptainPassword = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }
  //Encrypt password with sha1
    body.password = crypto.createHash('sha1').update(body.password).digest('hex');

  // Resident profile data modal
    var captainData = {password:body.password,user_verified:body.user_verified}
  // Update user profile data
  try {
        user.updateCaptainPassword(captainData, body.user_id).then((result) => {
          if (result) {
             if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Captain password not updated.`
              });
            } else {
              let data ={};
              data.response = result;
                res.send(data);
            }
          }
        });
} catch (error){
    res.status(500).send({
    message: error
  });
}
};



/**
 * Get marketing image data through request.
 * Create marketing image in marketingImages table with id.
 * @param req marketing image data object.
 * @param res data object which returns to user.
 */
exports.addMarketingImage = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.image_url == "") {
    res.status(400).send({
      message: "Image url id can not be empty!"
    });
  }

  // Create marketing image in the database
  try {
    let addImageBody = {
            image_url: body.image_url,
            title: body.title
      }
    user.addMarketingImage(addImageBody).then((result) => {
    var marketing_image_id = result.insertId;
    var property_codes = body.property_code.split(',');
    property_codes.forEach((code, index) => {
      body.property_code = code;
          let propertyImage = {
            marketing_image_id: marketing_image_id,
            property_code: code,
            status: body.status
          }
          user.deleteOldImagePropertyRelations(marketing_image_id, code, body.status).then((result) => {
            user.addMarketingImageProperty(propertyImage).then((result) => {
              let pId = result.insertId;
          user.getMarketingImage(marketing_image_id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Marketing image not added.`
              });
            } else {
                if(property_codes.length <= index +1){
                  let data ={};
                  data.response = result;
                  res.send(data);
                }
            }
          }
        });
      });
    });
  });
  });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};

/**
 * Get marketing image data through request.
 * Update user marketing image in marketingImages table with id.
 * @param req marketing image data object.
 * @param res data object which returns to user.
 */
exports.updateMarketingImage = (req, res) => {
  let body = req.body;

 // Validate request
 if (!body || body.image_url == "" || body.marketing_image_id == "") {
  res.status(400).send({
    message: "Image url/Marketing image id id can not be empty!"
  });
}

  // Update marketing image in the database
  try {
    let addImageBody = {
      image_url: body.image_url,
      title: body.title,
    }
    user.updateMarketingImage(addImageBody, body.marketing_image_id).then((result) => {
    var property_codes = body.property_code.split(',');
    property_codes.forEach((code, index) => {
      user.deleteOldImagePropertyRelations(body.marketing_image_id, code, body.status).then((result) => {
        let propertyImage = {
          marketing_image_id: body.marketing_image_id,
          property_code: code,
          status: body.status,
        }
      user.addMarketingImageProperty(propertyImage).then((resultMarketingImage) => {
        let pId = resultMarketingImage.insertId;
          user.getMarketingImage(body.marketing_image_id,).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Marketing image not Update.`
              });
            } else {
              if(property_codes.length <= index +1){
                let data ={};
                data.response = result;
                res.send(data);
              }
            }
          }
        });
    });
  });
  });
  });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};

/**
 * Get marketing image data through request.
 * Delete user marketing image in marketingImages table with id.
 * @param req marketing image data object.
 * @param res data object which returns to user.
 */
exports.deleteMarketingImage = (req, res) => {
  let body = req.body;

 // Validate request
 if (!body || body.marketing_image_id == "") {
  res.status(400).send({
    message: "Marketing image id id can not be empty!"
  });
}

  // Delete marketing image in the database
  try {
      user.deleteMarketingImage(body.marketing_image_id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Marketing image not deleted.`
              });
            } else {
                let data ={};
                data.message = "Marketing image deleted successfully.";
                res.send(data);
            }
          }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};

/**
 * Get marketing image data through request.
 * Get user marketing image in marketingImages table with id.
 * @param req marketing image data object.
 * @param res data object which returns to user.
 */
exports.getMarketingImage = (req, res) => {
  let body = req.body;

 // Validate request
 if (!body || body.marketing_image_id == "") {
  res.status(400).send({
    message: "Marketing image id id can not be empty!"
  });
}

  // Get marketing image in the database
  try {
      user.getMarketingImage(body.marketing_image_id).then((result) => {
            if (result) {
              if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Marketing image not found.`
              });
            } else {
              let data ={};
              let tempImages = [];
              
              result.forEach((image) => {
                let key = '_'+image.marketing_image_id;
                if (!tempImages.hasOwnProperty(key)) {
                  tempImages[key] = image;
                }
                else {
                  tempImages[key].property_code += ',' + image.property_code;
                }
              });
              result = [];
              for (let key in tempImages) 
                result.push(tempImages[key]);
              
              data.response = result;
              res.send(data);
            }
          }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};

/**
 * Get marketing image data through request.
 * Get all user marketing image in marketingImages table with id.
 * @param req marketing image data object.
 * @param res data object which returns to user.
 */
exports.getAllMarketingImage = (req, res) => {
  
  // Get all marketing image in the database
  try {
      user.getAllMarketingImage().then((result) => {
            if (result) {
              if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Marketing images not found.`
              });
              } else {
                let data ={};
                let tempImages = [];
                
                result.forEach((image) => {
                  let key = '_'+image.marketing_image_id;
                  if (!tempImages.hasOwnProperty(key)) {
                    tempImages[key] = image;
                  }
                  else {
                    tempImages[key].property_code += ',' + image.property_code;
                  }
                });
                result = [];
                for (let key in tempImages) 
                  result.push(tempImages[key]);
                
                data.response = result;
                res.send(data);
              }
            }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};


/**
 * Get Preferences data through request.
 * Get all user Preferences in preferences table with id.
 * @param req Preferences data object.
 * @param res data object which returns to user.
 */
exports.getPrefrences = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Get Preferences the database
  try {
      user.getPrefrences(body.user_id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Preferences not found.`
              });
            } else {
                let data ={};
                data.response = result;
                res.send(data);
            }
          }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};


/**
 * Get Preferences  data through request.
 * Update row in Preferences user table with user id.
 * @param req Preferences data object.
 * @param res data object which to returns to user.
 */
exports.updatePrefrences = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }
  
  // Update Preferencesdata
  try {
        user.updatePrefrences(body).then((result) => {
          if (result) {
             if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Preferences not updated.`
              });
            } else {
              let data ={};
              data.response = result;
                res.send(data);
            }
          }
        });
} catch (error){
    res.status(500).send({
    message: error
  });
}
};


/**
 * Get email data through request.
 * Send email to resident email address.
 * @param req email data object.
 * @param res data object which to returns to user.
 */
exports.sendCustomEmail = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.email == "") {
    res.status(400).send({
      message: "Email can not be empty!"
    });
  }
  
  // Update Preferencesdata
  try {
      mailer.sendCustomEmail(body).then((result) => {
          if (result) {
             if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Email not sent.`
              });
            } else {
              let data ={};
              data.response = result;
                res.send(data);
            }
          }
        });
} catch (error){
    res.status(500).send({
    message: error
  });
}
};

/**
 * Create residents note in residentNotes table.
 * @param req resident node object.
 * @param res data object which to returns to user.
 */
exports.createNotes = (req, res) => {
  let body = req.body;
  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }
  // Create residents note
  try {
      user.createNotes(body).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Residents not Created.`,
              });
            } else {
                let data ={};
                data.response = result;
                res.send(data);
            }
          }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};

/**
 * update residents note in residentNotes table.
 * @param req resident node object.
 * @param res data object which to returns to user.
 */
exports.updateNotes = (req, res) => {
  let body = req.body;
  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }
  // Update residents note
  try {
      user.updateNotes(body).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Residents not Created.`,
              });
            } else {
                let data ={};
                data.response = result;
                res.send(data);
            }
          }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};

/**
 * delete residents note in residentNotes table.
 * @param req resident node object.
 * @param res data object which to returns to user.
 */
exports.deleteNotes = (req, res) => {
  let body = req.body;
  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }
  // Delete residents note
  try {
      user.deleteNotes(body).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Note not deleted.`,
              });
            } else {
                let data ={};
                data.response = result;
                res.send(data);
            }
          }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};

/**
 * Get residents note from residentNotes table.
 * @param req resident id object.
 * @param res data object which to returns to user.
 */
exports.getNotes = (req, res) => {
  let body = req.body;
  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }
  // Get residents
  try {
      user.getNotes(body.user_id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Residents not found.`,
              });
            } else {
                let data ={};
                data.response = result;
                res.send(data);
            }
          }
      });
    } catch (error){
    res.status(500).send({
    message: error
  });
}
};
