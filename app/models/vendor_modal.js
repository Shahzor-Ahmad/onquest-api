const sql = require("../database/db");
const Database = require('../database/database');
const vendorQueries = require('./vendorQueries');

const User = {
  getVendorById: async function (id) {
    return await Database.asyncQuery(vendorQueries.GET_VENDOR_BY_ID, [id]);
  },
  getAllVendors: async function () {
    return await Database.asyncQuery(vendorQueries.GET_ALL_VENDORS, []);
  },
  getVendorByIdWithLocation: async function (id) {
    return await Database.asyncQuery(vendorQueries.GET_VENDOR_BY_ID_WITH_LCOATION, [id]);
  },
  createVendor: async function (newVendor) {
    return await Database.asyncQuery(vendorQueries.CREATE_VENDOR, [newVendor]);
  },
  deleteVendor: async function (id) {
    return await Database.asyncQuery(vendorQueries.DELETE_VENDOR, [id]);
  },
  updateVendorById: async function (updateVendor) {
    await Database.asyncQuery(vendorQueries.UPDATE_VENDOR, [updateVendor, updateVendor.vendor_id]);
    return await Database.asyncQuery(vendorQueries.GET_VENDOR_BY_ID, [updateVendor.vendor_id]);
 },
  assignVendorToLocation: async function (vendor) {
  return await Database.asyncQuery(vendorQueries.ASSIGN_VENDOR, [vendor]);
 },
}

module.exports = User;
