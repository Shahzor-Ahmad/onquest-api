const express = require('express');
const building = require("../models/building_modal.js");
const utils = require("../services/general_utils.js");

/**
 * Get location data through request.
 * Create location in building table with user id.
 * @param req location  data object.
 * @param res data object which returns to user.
 */
exports.createLocation = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.property_code == "") {
    res.status(400).send({
      message: "Property code can not be empty!"
    });
  }

  // Create location 
  try {
    // Check building if it exists
    building.getLocationByCode(body.property_code).then((result) => {
      if (result.length != 0 ) {
        res.status(400).send({
        message: `This property code already exists.`
    });
    } else{
        building.createLocation(body).then((result) => {
          let id = result.insertId;
          building.getLocationById(id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Location not created.`
              });
            } else {
                let data ={};
                data.response = result;
                res.send(data);
            }
          }
        });
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
 * Get location data through request.
 * Update location in building table with building id.
 * @param req location  data object.
 * @param res data object which returns to user.
 */
exports.updateLocation = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.property_code == "" || body.building_id == "") {
    res.status(400).send({
      message: "Property code or building id can not be empty!"
    });
  }

  // Update pet profile in the database
  try {
    building.updateLocationByCode(body).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Location not updated.`
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
 * Get location data through request.
 * Delete location from building table with user id.
 * @param req location data object.
 * @param res data object which returns to user.
 */
exports.deleteLocation = (req, res) => {
  let body = req.body;
  
  // Validate request
  if (!body || body.building_id == "") {
    res.status(400).send({
      message: "Building id can not be empty!"
    });
  }

  // Delete locations/buildings
  try {
    building.deleteLocation(body.building_id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Location not deleted.`
              });
            } else {
                let data ={};
                data.message = "Location deleted successfully.";
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
 * Get location data through request.
 * Get location from building table with user id.
 * @param req location data object.
 * @param res data object which returns to user.
 */
exports.getAllLocations = (req, res) => {

  // Get locations/buildings
  try {
    building.getAllLocations().then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Locations not found.`
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
 * Get location data through request.
 * Get location from building table with user id.
 * @param req location data object.
 * @param res data object which returns to user.
 */
exports.getAllCaptainsWithPropertyCode = (req, res) => {

  // Get locations/buildings
  try {
    building.getAllCaptainsWithPropertyCode().then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Captains not found.`
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
 * Get location data through request.
 * Update location in building table with building id.
 * @param req location  data object.
 * @param res data object which returns to user.
 */
exports.updateServiceDay = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.property_code == "" || body.building_id == "") {
    res.status(400).send({
      message: "Property code or building id can not be empty!"
    });
  }

  // Update pet profile in the database
  try {
    building.updateServiceDay(body).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Service day not updated.`
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