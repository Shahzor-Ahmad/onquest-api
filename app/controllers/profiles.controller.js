const express = require('express');
const profile = require("../models/profiles_model.js");


/**
 * Get user pet profile data through request.
 * Create user pet profile in petProfile table with user id.
 * @param req user data object.
 * @param res data object which returns to user.
 */
exports.pet = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Pet profile data modal
  //let userPetProfile = {user_id:body.user_id,name:body.name, age:body.age, profile_picture_url:body.profile_picture_url,pet_type:body.pet_type,other_type:body.other_type,other_pet:body.other_pet,breed:body.breed,size:body.size,gender:body.gender,other_information:body.other_information,notes:body.notes,service_enable:body.service_enable,service_type_id:body.service_type_id}
  
  // Save pet profile in the database
  try {
      profile.createUserPetProfile(body).then((result) => {
          let id = result.insertId;
          profile.getProfileById(id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User pet profile not created.`
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
 * Get user pet profile data through request.
 * Update user pet profile in petProfile table with user id.
 * @param req user data object.
 * @param res data object which returns to user.
 */
exports.updatePetProfile = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Update pet profile in the database
  try {
      profile.updateUserPetProfile(body).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User pet profile not updated.`
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
 * Get user_id data through request.
 * Get user pet profile from petProfile table with user id.
 * @param req user data object.
 * @param res data object which returns to user.
 */
exports.getPetProfileByUserId = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Get pet profile
  try {
      profile.getProfileByUserId(body.user_id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User pet profile not found.`
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
 * Get user housekeeping profile data through request.
 * Create user house keeping profile in house_keeping table with user id.
 * @param req user data object.
 * @param res data object which returns to user.
 */
exports.housekeeping = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Save house keeping profile in the database
  try {
      profile.createUserHouseKeepingProfile(body).then((result) => {
          let id = result.insertId;
          profile.getHouseKeepingProfileById(id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User pet profile not created.`
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
 * Get user housekeeping profile data through request.
 * Update user house keeping profile in house_keeping table with user id.
 * @param req user data object.
 * @param res data object which returns to user.
 */
exports.updateHousekeeping = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Update house keeping profile in the database
  try {
      profile.updateUserHouseKeepingProfile(body).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User pet profile not updated.`
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
 * Get user_id data through request.
 * Get user house keeping profile from house_keeping table with user id.
 * @param req user data object.
 * @param res data object which returns to user.
 */
exports.getHousekeeping = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Get house keeping profile
  try {
      profile.getHouseKeepingProfileByUserId(body.user_id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User house keeping profile not found.`
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
 * Get user grocery profile data through request.
 * Create user grocery shopping profile in grocery_shopping table with user id.
 * @param req user data object.
 * @param res data object which to returns to user.
 */
exports.grocery = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Save grocery shopping profile in the database
  try {
      profile.createUserGroceryShoppingProfile(body).then((result) => {
          let id = result.insertId;
          profile.getGroceryShoppingProfileById(id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User grocery shopping profile not created.`
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
 * Get user grocery profile data through request.
 * Update user grocery shopping in grocery_shopping table with user id.
 * @param req user data object.
 * @param res data object which to returns to user.
 */
exports.updateGrocery = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Update grocery shopping profile in the database
  try {
      profile.updateUserGroceryShoppingProfile(body).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User grocery shopping profile not updated.`
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
 * Get user_id data through request.
 * Get user grocery shopping profile from grocery_shopping table with user id.
 * @param req user data object.
 * @param res data object which to returns to user.
 */
exports.getGrocery = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Get grocery shopping profile
  try {
      profile.getGroceryShoppingProfileByUserId(body.user_id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User grocery shopping profile not found.`
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
 * Get user rxpickup profile data through request.
 * Create user rx pickup profile in rx_pickup table with user id.
 * @param req user data object.
 * @param res data object which to returns to user.
 */
exports.rxpickup = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Save rx pickup profile in the database
  try {
      profile.createUserRxPickupProfile(body).then((result) => {
          let id = result.insertId;
          profile.getRxPickupProfileById(id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User Rx pickup profile not created.`
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
 * Get user rxpickup profile data through request.
 * Update user rx pickup profile in rx_pickup table with user id.
 * @param req user data object.
 * @param res data object which to returns to user.
 */
exports.updateRxpickup = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Update rx pickup profile in the database
  try {
      profile.updateUserRxPickupProfile(body).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User Rx pickup profile not updated.`
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
 * Get user_id data through request.
 * Get user rx pickup profile from rx_pickup table with user id.
 * @param req user data object.
 * @param res data object which to returns to user.
 */
exports.getRxpickup = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.user_id == "") {
    res.status(400).send({
      message: "User id can not be empty!"
    });
  }

  // Get rx pickup profile
  try {
      profile.getRxPickupProfileByUserId(body.user_id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `User Rx pickup profile not found.`
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