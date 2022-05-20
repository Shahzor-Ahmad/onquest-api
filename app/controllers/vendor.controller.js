const express = require('express');
const vendor = require("../models/vendor_modal.js");
const utils = require("../services/general_utils.js");

/**
 * Get vendor data through request.
 * Create Vendor in vendor table with user id.
 * @param req Vendor  data object.
 * @param res data object which returns to user.
 */
exports.createVendor = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.property_code == "") {
    res.status(400).send({
      message: "Property code can not be empty!"
    });
  }

  // Create Vendor 
  try {
    vendor.createVendor(body).then((result) => {
          let id = result.insertId;
          vendor.getVendorById(id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Vendor not created!`
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
 * Get Vendor data through request.
 * Update Vendor in vendor table with vendor id.
 * @param req Vendor  data object.
 * @param res data object which returns to user.
 */
exports.updateVendor = (req, res) => {
  let body = req.body;

  // Validate request
  if (!body || body.property_code == "" || body.vendor_id == "") {
    res.status(400).send({
      message: "Property code or vendor id can not be empty!"
    });
  }

  // Add current date and time to last_updated
  utils.getCurrentDateTime().then((result) => {
    body.last_updated = result;
  });

  // Update pet profile in the database
  try {
    vendor.updateVendorById(body).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Vendor not updated.`
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
 * Get Vendor data through request.
 * Delete Vendor from vendor table with user id.
 * @param req Vendor data object.
 * @param res data object which returns to user.
 */
exports.deleteVendor = (req, res) => {
  let body = req.body;
  
  // Validate request
  if (!body || body.vendor_id == "") {
    res.status(400).send({
      message: "vendor id can not be empty!"
    });
  }

  // Delete vendor
  try {
    vendor.deleteVendor(body.vendor_id).then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Vendor not deleted.`
              });
            } else {
                let data ={};
                data.message = "Vendor deleted successfully.";
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
 * Get Vendor data through request.
 * Delete Vendor from vendor table with user id.
 * @param req Vendor data object.
 * @param res data object which returns to user.
 */
exports.getVendor = (req, res) => {
    let body = req.body;
    
    // Validate request
    if (!body || body.vendor_id == "") {
      res.status(400).send({
        message: "vendor id can not be empty!"
      });
    }
  
    // Get vendor
    try {
      vendor.getVendorById(body.vendor_id).then((result) => {
                if (result) {
                  if (result.length == 0 ) {
                    res.status(404).send({
                    message: `Vendor not found.`
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
 * Get Vendor id through request.
 * Assign Vendor to location.
 * @param req Vendor data object.
 * @param res data object which returns to user.
 */
exports.assignVendor = (req, res) => {
  let body = req.body;
  
  // Validate request
  if (!body || body.vendor_id == "" || body.building_id == "") {
    res.status(400).send({
      message: "vendor/building id can not be empty!"
    });
  }

  // Assign vendor to location
  try {
    vendor.assignVendorToLocation(body).then((result) => {
      let id = result.insertId;
      vendor.getVendorByIdWithLocation(body.vendor_id).then((result) => {
          if (result) {
            if (result.length == 0 ) {
              res.status(404).send({
              message: `Vendor not assigned to location. Please try again letter.`
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
 * Get vendor data from user table with user id.
 * @param req users code object.
 * @param res data object which to returns to user.
 */
exports.getAllVendors = (req, res) => {
  // Get users 
  try {
    vendor.getAllVendors().then((result) => {
              if (result) {
                if (result.length == 0 ) {
                  res.status(404).send({
                  message: `Vendors not found.`,
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
