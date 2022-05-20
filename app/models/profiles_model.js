const sql = require("../database/db");
const Database = require('../database/database');
const userQueries = require('./profilesQueries');

const profile = {
  
  // Pet profile 
  getProfileById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_PROFILE_BY_ID, [id]);
  },
  getProfileByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_PROFILE_BY_USER_ID, [userId]);
  },
  createUserPetProfile: async function (userPetProfile) {
    return await Database.asyncQuery(userQueries.CREATE_PET_PROFILE, [userPetProfile]);
  },
  updateUserPetProfile: async function (userPetProfile) {
    await Database.asyncQuery(userQueries.UPDATE_PET_PROFILE, [userPetProfile, userPetProfile.id]);
   return await Database.asyncQuery(userQueries.GET_PROFILE_BY_USER_ID, [userPetProfile.user_id]);
 },

 // House keeping profile 
  getHouseKeepingProfileById: async function (id) {
  return await Database.asyncQuery(userQueries.GET_HOUSE_KEEPING_PROFILE_BY_ID, [id]);
  },
  getHouseKeepingProfileByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_HOUSE_KEEPING_PROFILE_BY_USER_ID, [userId]);
  },
  createUserHouseKeepingProfile: async function (userHouseKeepingProfile) {
    return await Database.asyncQuery(userQueries.CREATE_HOUSE_KEEPING_PROFILE, [userHouseKeepingProfile]);
  },
  updateUserHouseKeepingProfile: async function (userHouseKeepingProfile) {
    await Database.asyncQuery(userQueries.UPDATE_HOUSE_KEEPING_PROFILE, [userHouseKeepingProfile, userHouseKeepingProfile.user_id]);
  return await Database.asyncQuery(userQueries.GET_HOUSE_KEEPING_PROFILE_BY_USER_ID, [userHouseKeepingProfile.user_id]);
  },

  // Grocery shopping profile 
  getGroceryShoppingProfileById: async function (id) {
  return await Database.asyncQuery(userQueries.GET_GROCERY_PROFILE_BY_ID, [id]);
  },
  getGroceryShoppingProfileByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_GROCERY_PROFILE_BY_USER_ID, [userId]);
  },
  createUserGroceryShoppingProfile: async function (userGroceryShoppingProfile) {
    return await Database.asyncQuery(userQueries.CREATE_GROCERY_PROFILE, [userGroceryShoppingProfile]);
  },
  updateUserGroceryShoppingProfile: async function (userGroceryShoppingProfile) {
    await Database.asyncQuery(userQueries.UPDATE_GROCERY_PROFILE, [userGroceryShoppingProfile, userGroceryShoppingProfile.user_id]);
  return await Database.asyncQuery(userQueries.GET_GROCERY_PROFILE_BY_USER_ID, [userGroceryShoppingProfile.user_id]);
  },

  // Rx pickup profile 
  getRxPickupProfileById: async function (id) {
  return await Database.asyncQuery(userQueries.GET_RX_PCIKUP_PROFILE_BY_ID, [id]);
  },
  getRxPickupProfileByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_RX_PCIKUP_PROFILE_BY_USER_ID, [userId]);
  },
  createUserRxPickupProfile: async function (userRxPickupProfile) {
    return await Database.asyncQuery(userQueries.CREATE_RX_PCIKUP_PROFILE, [userRxPickupProfile]);
  },
  updateUserRxPickupProfile: async function (userRxPickupProfile) {
    await Database.asyncQuery(userQueries.UPDATE_RX_PCIKUP_PROFILE, [userRxPickupProfile, userRxPickupProfile.user_id]);
  return await Database.asyncQuery(userQueries.GET_RX_PCIKUP_PROFILE_BY_USER_ID, [userRxPickupProfile.user_id]);
  },

  //payment Profile
  insertPaymentProfile: async function (data) {
    return await Database.asyncQuery(userQueries.PAYMENT_PROFILE_INSERT, [data]);
  },
  updatePaymentProfile: async function (data, user_id) {
    return await Database.asyncQuery(userQueries.PAYMENT_PROFILE_UPDATE, [data, user_id]);
  },
  deletePaymentProfile: async function (user_id) {
    return await Database.asyncQuery(userQueries.DELETE_PAYMENT_PROFILE, [user_id]);
  },
  getPaymentProfile: async function (user_id) {
    return await Database.asyncQuery(userQueries.SELECT_PAYMENT_PROFILE, [user_id]);
  },
}

module.exports = profile;
