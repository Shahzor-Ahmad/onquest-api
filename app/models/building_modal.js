const sql = require("../database/db");
const Database = require('../database/database');
const buildingQueries = require('./buildingQueries');

const User = {
  getLocationByCode: async function (code) {
    return await Database.asyncQuery(buildingQueries.GET_BUILDING_BY_CODE, [code]);
  },
  getAllCaptainsWithPropertyCode: async function () {
    return await Database.asyncQuery(buildingQueries.GET_CAPTAINS_WITH_PROPERTY_CODE, []);
  },
  getLocationById: async function (code) {
    return await Database.asyncQuery(buildingQueries.GET_BUILDING_BY_ID, [code]);
  },
  getAllLocations: async function () {
    return await Database.asyncQuery(buildingQueries.GET_ALL_BUILDINGS, []);
  },
  createLocation: async function (newBuilding) {
    return await Database.asyncQuery(buildingQueries.CREATE_BUILDING, [newBuilding]);
  },
  deleteLocation: async function (id) {
    return await Database.asyncQuery(buildingQueries.DELETE_Building, [id]);
  },
  updateLocationByCode: async function (updateBuilding) {
    console.log(updateBuilding);
    await Database.asyncQuery(buildingQueries.UPDATE_BUILDING, [updateBuilding, updateBuilding.building_id]);
    return await Database.asyncQuery(buildingQueries.GET_BUILDING_BY_ID, [updateBuilding.building_id]);
 },

  // Update sevice days
  updateServiceDay: async function (serviceDay) {
    await Database.asyncQuery(buildingQueries.UPDATE_SERVICE_DAYS, [serviceDay.service_day, serviceDay.building_id]);
    return await Database.asyncQuery(buildingQueries.GET_BUILDING_BY_ID, [serviceDay.building_id]);
  },
  
}

module.exports = User;
