const sql = require("../database/db");
const Database = require('../database/database');
const userQueries = require('./userQueries');

const User = {
  getUserById: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_USER_BY_ID, [userId]);
  },
  getAllResidents: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_ALL_RESIDENTS, [userId]);
  },
  getCaptains: async function () {
    return await Database.asyncQuery(userQueries.GET_ALL_CAPTAINS, []);
  },
  deleteUser: async function (user_id) {
    return await Database.asyncQuery(userQueries.DELETE_USER, [user_id]);
  },
  getAllUsers: async function (user) {
    if(user.user_type == "resident"){
      return await Database.asyncQuery(userQueries.GET_ALL_RESIDENTS_BY_BUILDING_ID, [user.property_code]);
    }else{
      return await Database.asyncQuery(userQueries.GET_ALL_CAPTAINS_BY_BUILDING_ID, [user.property_code, "%"+user.property_code+"%"]);
    }
    
  },
  getPetProfile: async function (user_id) {
    return await Database.asyncQuery(userQueries.GET_PET_PROFILE, [user_id]);
  },
  getHouseKeepingProfile: async function (user_id) {
    return await Database.asyncQuery(userQueries.GET_HOUSEKEEPING_PROFILE, [user_id]);
  },
  getGroceryProfile: async function (user_id) {
    return await Database.asyncQuery(userQueries.GET_GROCERY_PROFILE, [user_id]);
  },
  getRxPickupProfile: async function (user_id) {
    return await Database.asyncQuery(userQueries.GET_RX_PICKUP_PROFILE, [user_id]);
  },
  getTermsAndCondition: async function () {
    return await Database.asyncQuery(userQueries.GET_TERMS_AND_CONDITIONS);
  },
  authenticateUser: async function (body) {
    if(body.user_type_id == "1")
      return await Database.asyncQuery(userQueries.AUTHENTICATE_USER_BY_USERNAME_PASSWORD, [body.username, body.password, body.user_type_id]);
     else if(body.user_type_id == "2")
       return await Database.asyncQuery(userQueries.AUTHENTICATE_CAPTAIN_BY_USERNAME_PASSWORD, [body.username, body.password, body.user_type_id]);
     else
       return await Database.asyncQuery(userQueries.AUTHENTICATE_ADMIN_BY_USERNAME_PASSWORD, [body.username, body.password]);
  },
  getUserByEmail: async function (user) {
    return await Database.asyncQuery(userQueries.CHECK_USER, [user.email]);
  },
  creatUser: async function (newUser) {
    await Database.asyncQuery(userQueries.CREATE_USER, [newUser]);
    return await Database.asyncQuery(userQueries.CHECK_USER, [newUser.email]);
  },
  verifyUser: async function (user) {
    return await Database.asyncQuery(userQueries.UPDATE_USER, [user.user_verified, user.user_id]);
  },
  createUserProfile: async function (newUserProfile) {
     await Database.asyncQuery(userQueries.CREATE_USER_PROFILE, [newUserProfile]);
    await Database.asyncQuery(userQueries.ADD_PREFRENCES, [
       {"user_id": newUserProfile.user_id,
        "sms": "true",
       "email": "true",
       "push_notification": "true"}]);
    return await Database.asyncQuery(userQueries.GET_USER_PROFILE, [newUserProfile.user_id]);
  },
  updateUserProfile: async function (updateUserProfile, building_id, additional_building, user_type_id) {
    await Database.asyncQuery(userQueries.UPDATE_USER_PROFILE, [updateUserProfile, updateUserProfile.user_id]);
    if(user_type_id == 3 || user_type_id == 2){
    await Database.asyncQuery(userQueries.UPDATE_USER_BUILDING_ID, [building_id, additional_building, updateUserProfile.user_id]);
    }
   return await Database.asyncQuery(userQueries.GET_USER_PROFILE, [updateUserProfile.user_id]);
 },

 updateCaptainPassword: async function (captainData, user_id) {
  await Database.asyncQuery(userQueries.UPDATE_USER_CAPTAIN, [captainData, user_id]);
  return await Database.asyncQuery(userQueries.GET_USER_PROFILE, [user_id]);
},
 assignCaptainToLocation: async function (captain) {
  return await Database.asyncQuery(userQueries.ASSIGN_CAPTAIN, [captain]);
 },
 getCaptainByIdWithLocation: async function (id) {
  return await Database.asyncQuery(userQueries.GET_CAPTAIN_BY_ID_WITH_LCOATION, [id]);
},
  
// Marketing Images
addMarketingImage: async function (newImage) {
  return await Database.asyncQuery(userQueries.ADD_MARKETING_IMAGE, [newImage]);
},
addMarketingImageProperty: async function (newImage) {
  return await Database.asyncQuery(userQueries.ADD_PEROPERTY_MARKETING_IMAGE, [newImage]);
},
disableAllMarketingImage: async function (id, status, property_code) {
  if(status == 'true')
  return await Database.asyncQuery(userQueries.DISABLE_ALL_MARKETING_IMAGES, [id, property_code]);
  else
  return true;
},
deleteOldImagePropertyRelations: async function (id, property_code, status) {
  if(status == 'true')
  return await Database.asyncQuery(userQueries.DELETE_ALL_MARKETING_IMAGES_PROPERTY, [id, property_code]);
  else
  return true;
},
getMarketingImage: async function (id) {
  return await Database.asyncQuery(userQueries.GET_MARKETING_IMAGE_BY_ID, [id]);
},
getAllMarketingImage: async function () {
  return await Database.asyncQuery(userQueries.GET_ALL_MARKETING_IMAGES, []);
},
updateMarketingImage: async function (data, marketing_image_id) {
 await Database.asyncQuery(userQueries.UPDATE_MARKETING_IMAGE, [data, marketing_image_id]);
 return await Database.asyncQuery(userQueries.GET_MARKETING_IMAGE_BY_ID, [data.marketing_image_id]);
},
updatePropertyMarketingImage: async function (data) {
  await Database.asyncQuery(userQueries.UPDATE_PEROPERTY_MARKETING_IMAGE, [data, data.marketing_image_id, data.property_code]);
  return await Database.asyncQuery(userQueries.GET_MARKETING_IMAGE_BY_ID, [data.marketing_image_id]);
 },
deleteMarketingImage: async function (id) {
  return await Database.asyncQuery(userQueries.DELETE_MARKETING_IMAGE, [id]);
},
getLocationByCode: async function (code) {
  return await Database.asyncQuery(userQueries.GET_BUILDING_BY_CODE, [code]);
},
  
// Prefrences
getPrefrences: async function (user_id) {
  return await Database.asyncQuery(userQueries.GET_PREFRENCES, [user_id]);
},
addPrefrences: async function (data) {
  return await Database.asyncQuery(userQueries.ADD_PREFRENCES, [data]);
},
updatePrefrences: async function (data) {
 await Database.asyncQuery(userQueries.UPDATE_PREFRENCES, [data, data.user_id]);
 return await Database.asyncQuery(userQueries.GET_PREFRENCES, [data.user_id]);
},
  
  
// Resident Notes
getNotes: async function (user_id) {
  return await Database.asyncQuery(userQueries.GET_RESIDENT_NOTES, [user_id]);
},
createNotes: async function (notes) {
  await Database.asyncQuery(userQueries.CREATE_RESIDENT_NOTES, [notes]);
  return await Database.asyncQuery(userQueries.GET_RESIDENT_NOTES, [notes.user_id]);
},
updateNotes: async function (notes) {
  await Database.asyncQuery(userQueries.UPDATE_RESIDENT_NOTES, [notes, notes.id]);
  return await Database.asyncQuery(userQueries.GET_RESIDENT_NOTES, [notes.user_id]);
},
deleteNotes: async function (notes) {
  await Database.asyncQuery(userQueries.DELETE_RESIDENT_NOTES, [notes.id]);
  return await Database.asyncQuery(userQueries.GET_RESIDENT_NOTES, [notes.user_id]);
},
}

module.exports = User;
