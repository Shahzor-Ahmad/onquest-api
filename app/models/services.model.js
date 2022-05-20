const sql = require("../database/db");
const Database = require('../database/database');
const userQueries = require('./servicesQueries');

const profile = {
  
  // Handy man 
  getServiceById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_SERVICE_BY_ID, [id]);
  },
  getServiceByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_SERVICE_BY_USER_ID, [userId]);
  },
  createHandyManService: async function (service) {
    return await Database.asyncQuery(userQueries.CREATE_HANDY_MAN_SERVICE, [service]);
  },
  updateHandyManService: async function (service) {
    await Database.asyncQuery(userQueries.UPDATE_HANDY_MAN_SERVICE, [service, service.user_id]);
    return await Database.asyncQuery(userQueries.GET_SERVICE_BY_USER_ID, [service.user_id]);
 },


 // Onquest Clean
  getOnquestCleanById: async function (id) {
  return await Database.asyncQuery(userQueries.GET_ONQUEST_SERVICE_BY_ID, [id]);
  },
  getOnquestCleanByUserId: async function (userId) {
  return await Database.asyncQuery(userQueries.GET_ONQUEST_SERVICE_BY_USER_ID, [userId]);
  },
  createOnquestClean: async function (service) {
  return await Database.asyncQuery(userQueries.CREATE_ONQUEST_SERVICE, [service]);
  },
  updateOnquestClean: async function (service) {
  await Database.asyncQuery(userQueries.UPDATE_ONQUEST_SERVICE, [service, service.id]);
  return await Database.asyncQuery(userQueries.GET_ONQUEST_SERVICE_BY_ID, [service.id]);
},


  // Package pickup
  getPackagePickupById: async function (id) {
  return await Database.asyncQuery(userQueries.GET_PACKAGE_PICKUP_SERVICE_BY_ID, [id]);
  },
  getPackagePickupByUserId: async function (userId) {
  return await Database.asyncQuery(userQueries.GET_PACKAGE_PICKUP_SERVICE_BY_USER_ID, [userId]);
  },
  createPackagePickup: async function (service) {
  return await Database.asyncQuery(userQueries.CREATE_PACKAGE_PICKUP_SERVICE, [service]);
  },
  updatePackagePickup: async function (service) {
  await Database.asyncQuery(userQueries.UPDATE_PACKAGE_PICKUP_SERVICE, [service, service.id]);
  return await Database.asyncQuery(userQueries.GET_PACKAGE_PICKUP_SERVICE_BY_ID, [service.id]);
},




 // Mobile car wash service 
  getMobileCarWashServiceById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_MOBILE_CAR_WASH_BY_ID, [id]);
  },
  getMobileCarWashServiceByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_MOBILE_CAR_WASH_BY_USER_ID, [userId]);
  },
  createUserMobileCarWashService: async function (userMobileCarWashService) {
    return await Database.asyncQuery(userQueries.CREATE_MOBILE_CAR_WASH, [userMobileCarWashService]);
  },
  updateUserMobileCarWashService: async function (userMobileCarWashService) {
    await Database.asyncQuery(userQueries.UPDATE_MOBILE_CAR_WASH, [userMobileCarWashService, userMobileCarWashService.user_id]);
    return await Database.asyncQuery(userQueries.GET_MOBILE_CAR_WASH_BY_USER_ID, [userMobileCarWashService.user_id]);
  },

  // Pet care service  
  getPetCareById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_PET_CARE_BY_ID, [id]);
  },
  getProfileId: async function (id) {
    return await Database.asyncQuery(userQueries.GET_PET_CARE_PROFILE_ID, [id]);
  },
  getPetCareByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_PET_CARE_BY_USER_ID, [userId]);
  },
  createUserPetCare: async function (userPetCare) {
    return await Database.asyncQuery(userQueries.CREATE_PET_CARE, [userPetCare]);
  },
  updateUserPetCare: async function (userPetCare) {
    await Database.asyncQuery(userQueries.UPDATE_PET_CARE, [userPetCare, userPetCare.user_id]);
    return await Database.asyncQuery(userQueries.GET_PET_CARE_BY_USER_ID, [userPetCare.user_id]);
  },

  // Special request service 
  getSpecialRequestById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_SPECIAL_REQUEST_BY_ID, [id]);
  },
  getSpecialRequestByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_SPECIAL_REQUEST_BY_USER_ID, [userId]);
  },
  createUserSpecialRequest: async function (userSpecialRequest) {
    return await Database.asyncQuery(userQueries.CREATE_SPECIAL_REQUEST, [userSpecialRequest]);
  },
  updateUserSpecialRequest: async function (userSpecialRequest) {
    await Database.asyncQuery(userQueries.UPDATE_SPECIAL_REQUEST, [userSpecialRequest, userSpecialRequest.user_id]);
    return await Database.asyncQuery(userQueries.GET_SPECIAL_REQUEST_BY_USER_ID, [userSpecialRequest.user_id]);
  },

  // Errand flower delivery service 
  getErrandFlowerDeliveryById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_ERRAND_FLOWER_DELIVERY_BY_ID, [id]);
  },
  getErrandFlowerDeliveryByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_ERRAND_FLOWER_DELIVERY_BY_USER_ID, [userId]);
  },
  createErrandFlowerDelivery: async function (userErrandFlowerDelivery) {
    return await Database.asyncQuery(userQueries.CREATE_ERRAND_FLOWER_DELIVERY, [userErrandFlowerDelivery]);
  },
  updateErrandFlowerDelivery: async function (userErrandFlowerDelivery) {
    await Database.asyncQuery(userQueries.UPDATE_ERRAND_FLOWER_DELIVERY, [userErrandFlowerDelivery, userErrandFlowerDelivery.id]);
    return await Database.asyncQuery(userQueries.GET_ERRAND_FLOWER_DELIVERY_BY_ID, [userErrandFlowerDelivery.id]);
  },

  // Errand general service 
  getErrandGeneralById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_ERRAND_GENERAL_BY_ID, [id]);
  },
  getErrandGeneralByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_ERRAND_GENERAL_BY_USER_ID, [userId]);
  },
  createErrandGeneral: async function (userErrandGeneral) {
    return await Database.asyncQuery(userQueries.CREATE_ERRAND_GENERAL, [userErrandGeneral]);
  },
  updateErrandGeneral: async function (userErrandGeneral) {
    await Database.asyncQuery(userQueries.UPDATE_ERRAND_GENERAL, [userErrandGeneral, userErrandGeneral.user_id]);
    return await Database.asyncQuery(userQueries.GET_ERRAND_GENERAL_BY_USER_ID, [userErrandGeneral.user_id]);
  },


  // Errand rx pickup service 
  getErrandRxPickupById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_ERRAND_RX_PICKUP_BY_ID, [id]);
  },
  getProfileId: async function (id) {
    return await Database.asyncQuery(userQueries.GET_ERRAND_RX_PICKUP_PROFILE_ID, [id]);
  },
  getErrandRxPickupByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_ERRAND_RX_PICKUP_BY_USER_ID, [userId]);
  },
  createErrandRxPickup: async function (userErrandRxPickup) {
    return await Database.asyncQuery(userQueries.CREATE_ERRAND_RX_PICKUP, [userErrandRxPickup]);
  },
  updateErrandRxPickup: async function (userErrandRxPickup) {
    await Database.asyncQuery(userQueries.UPDATE_ERRAND_RX_PICKUP, [userErrandRxPickup, userErrandRxPickup.id]);
    return await Database.asyncQuery(userQueries.GET_ERRAND_RX_PICKUP_BY_ID, [userErrandRxPickup.id]);
  },

  // Get user
  getUserById: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_USER_BY_ID, [userId]);
  },

  // Get restricted services
  getRestrictedServices: async function (user) {
    return await Database.asyncQuery(userQueries.GET_RESTRICTED_SERVICES, [user.city, user.state, user.zip_code, user.building_id]);
  },

  // Get all services
  getAllServices: async function () {
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES,[]);
  },

  // Building 
  getBuildingByPropertyCode: async function (buildingId) {
    return await Database.asyncQuery(userQueries.GET_BUILDING_BY_BUILDING_ID, [buildingId]);
  },

  // Services enbale/disable
  setServiceEnableDisable: async function (data) {
    data.forEach(element => {
       Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE, [element]);
    });
    return true;
  },

  // Get all services by user id
  getAllServicesFromGroceryShoppingByPropertyCode: async function (propertyCode, captainId, service_day) {
    if(propertyCode == "" && captainId == "" && service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_GROCERY_SHOPPING_All_RESIDENTS,[]);
    else if(captainId == "" || service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_GROCERY_SHOPPING,[propertyCode]);
    else
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_GROCERY_SHOPPING_BY_CAPTAIN,[propertyCode, captainId, service_day]);

  },

  // Get all services by user id
  getAllServicesFromLaudryPickupPropertyCode: async function (propertyCode, captainId, service_day) {
    if(propertyCode == "" && captainId == "" && service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_LAUNDRY_PICKUP_All_RESIDENTS,[]);
    else if(captainId == "" || service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_LAUNDRY_PICKUP,[propertyCode]);
    else
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_LAUNDRY_PICKUP_BY_CAPTAIN,[propertyCode, captainId, service_day]);

  },

  // Get all services by user id
  getAllServicesFromLaundryDropoffByPropertyCode: async function (propertyCode, captainId, service_day) {
    if(propertyCode == "" && captainId == "" && service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_LAUNDRY_DROPOFF_All_RESIDENTS,[]);
    else if(captainId == "" || service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_LAUNDRY_DROPOFF,[propertyCode]);
    else
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_LAUNDRY_DROPOFF_BY_CAPTAIN,[propertyCode, captainId, service_day]);

  },

  // Get all services by user id
  getAllServicesFromHouseKeepingByPropertyCode: async function (propertyCode, captainId, service_day) {
    if(propertyCode == "" && captainId == "" && service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_HOUSE_KEEPING_All_RESIDENTS,[]);
    else if(captainId == "" || service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_HOUSE_KEEPING,[propertyCode]);
    else
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_HOUSE_KEEPING_BY_CAPTAIN,[propertyCode, captainId, service_day]);

  },

  // Get all services by user id
  getAllServicesFromErrandFlowerDeliveryByPropertyCode: async function (propertyCode, captainId, service_day) {
    if(propertyCode == "" && captainId == "" && service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ERRAND_FLOWER_DELIVERY_All_RESIDENTS,[]);
    else if(captainId == "" || service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ERRAND_FLOWER_DELIVERY,[propertyCode]);
    else
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ERRAND_FLOWER_DELIVERY_BY_CAPTAIN,[propertyCode, captainId, service_day]);

  },

  // Get all services by user id
  getAllServicesFromErrandRxPickupByPropertyCode: async function (propertyCode, captainId, service_day) {
    if(propertyCode == "" && captainId == "" && service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ERRAND_RX_PICKUP_All_RESIDENTS,[]);
    else if(captainId == "" || service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ERRAND_RX_PICKUP,[propertyCode]);
    else
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ERRAND_RX_PICKUP_BY_CAPTAIN,[propertyCode, captainId, service_day]);

  },

  // Get all services by user id
  getAllServicesFromErrandGeneralByPropertyCode: async function (propertyCode, captainId, service_day) {
    if(propertyCode == "" && captainId == "" && service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ERRAND_GENERAL_All_RESIDENTS,[]);
    else if(captainId == "" || service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ERRAND_GENERAL,[propertyCode]);
    else
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ERRAND_GENERAL_BY_CAPTAIN,[propertyCode, captainId, service_day]);

  },

  // Get all services by user id
  getAllServicesFromOnquestByPropertyCode: async function (propertyCode, captainId, service_day) {
    if(propertyCode == "" && captainId == "" && service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ONQUEST_All_RESIDENTS,[]);
    else if(captainId == "" || service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ONQUEST,[propertyCode]);
    else
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_ONQUEST_BY_CAPTAIN,[propertyCode, captainId, service_day]);

  },

  // Get all services by user id
  getAllServicesFromPackagePickupByPropertyCode: async function (propertyCode, captainId, service_day) {
    if(propertyCode == "" && captainId == "" && service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_PACKAGE_PICKUP_All_RESIDENTS,[]);
    else if(captainId == "" || service_day == "")
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_PACKAGE_PICKUP,[propertyCode]);
    else
    return await Database.asyncQuery(userQueries.GET_ALL_SERVICES_PACKAGE_PICKUP_BY_CAPTAIN,[propertyCode, captainId, service_day]);

  },

  // Get all services by user id
  getAllServicesByUserId: async function (data, user_id) {
       if(data.id == 1)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_HANDY_MAN, [user_id]);
       else if(data.id == 2)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_MOBILE_CAR_WASH, [user_id]);
       else if(data.id == 3)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_PET_CARE, [user_id]);
       else if(data.id == 4)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_SPECIAL_REQUEST, [user_id]);
       else if(data.id == 5)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_ERRAND_FLOWER_DELIVERY, [user_id]);
       else if(data.id == 6)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_ERRAND_RX_PICKUP, [user_id]);
       else if(data.id == 7)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_ERRAND_GENERAL, [user_id]);
       else if(data.id == 8)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_GROCERY_SHOPPING, [user_id]);
       else if(data.id == 10)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_HOUSE_KEEPING, [user_id]);
       else if(data.id == 15)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_LAUNDRY_PICKUP, [user_id]);
       else if(data.id == 16)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_LAUNDRY_DROP_OFF, [user_id]);
       else if(data.id == 18)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_ONQUEST_CLEAN, [user_id]);
       else if(data.id == 19)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_PACKAGE_PICKUP_SERVICE, [user_id]);
},

  // Services enbale/disable 
  updateServiceEnableDisable: async function (data) {
    data.forEach(element => {
       Database.asyncQuery(userQueries.UPDATE_SERVICE_ENABLE_DISABLE, [element, element.id]);
    });
    return true;
  },

  // Get enable disable services
  getServiceEnableDisable: async function (user_id) {
    return await Database.asyncQuery(userQueries.GET_SERVICE_ENABLE_DISABLE, [user_id]);
  },

  // Grocery items
  getGroceryItems: async function () {
    return await Database.asyncQuery(userQueries.GET_GROCERY_ITEMS, []);
  },
  createGroceryItem: async function (groceryItem) {
    return await Database.asyncQuery(userQueries.CREATE_GROCERY_ITEM, [groceryItem]);
  },
  updateGroceryItem: async function (groceryItem) {
    await Database.asyncQuery(userQueries.UPDATE_GROCERY_ITEM, [groceryItem, groceryItem.id]);
    return await Database.asyncQuery(userQueries.GET_GROCERY_ITEMS, []);
  },

  // Grocery Lists
  getGroceryLists: async function (user_id) {
    return await Database.asyncQuery(userQueries.GET_GROCERY_LISTS, [user_id]);
  },
  // Grocery Lists
  getGroceryListById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_GROCERY_LISTS_BY_ID, [id]);
  },
  createGroceryList: async function (groceryList) {
    return await Database.asyncQuery(userQueries.CREATE_GROCERY_LIST, [groceryList]);
  },
  deleteGroceryList: async function (id) {
    return await Database.asyncQuery(userQueries.DELETE_GROCERY_LIST, [id]);
  },
  updateGroceryList: async function (groceryList) {
    await Database.asyncQuery(userQueries.UPDATE_GROCERY_LIST, [groceryList, groceryList.id]);
    return await Database.asyncQuery(userQueries.GET_GROCERY_LISTS, [groceryList.user_id]);
  },

  // User Grocery items added
  // getUserGroceryItems: async function (user_id) {
  //   return await Database.asyncQuery(userQueries.GET_USER_GROCERY_ITEMS, [user_id]);
  // },
  getUserGroceryItemsWithListId: async function (listId) {
    return await Database.asyncQuery(userQueries.GET_GROCERY_ITEMS_BY_LIST_ID, [listId]);
  },
  addUserGroceryItem: async function (usergroceryItem) {
    return await Database.asyncQuery(userQueries.CREATE_USER_GROCERY_ITEM, [usergroceryItem]);
  },
  addUserGroceryItemWithListId: async function (item_id, list_id) {
    return await Database.asyncQuery(userQueries.ADD_USER_GROCERY_ITEM_WITH_LIST, [item_id, list_id]);
  },
  deleteUserGroceryItem: async function (item_id, list_id) {
    return await Database.asyncQuery(userQueries.DELETE_GROCERY_ITEM, [item_id, list_id]);
  },
  updateUserGroceryItem: async function (UsergroceryItem) {
    return await Database.asyncQuery(userQueries.UPDATE_USER_GROCERY_ITEM, [UsergroceryItem, UsergroceryItem.id]);
    //return await Database.asyncQuery(userQueries.GET_USER_GROCERY_ITEMS, [UsergroceryItem.user_id]);
  },

  // Laundry pickup service
  getLaundryPickupById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_LAUNDRY_PICKUP_BY_ID, [id]);
  },
  getLaundryPickupByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_LAUNDRY_PICKUP_BY_USER_ID, [userId]);
  },
  createLaundryPickup: async function (userLaundryPickup) {
    return await Database.asyncQuery(userQueries.CREATE_LAUNDRY_PICKUP, [userLaundryPickup]);
  },
  updateLaundryPickup: async function (userLaundryPickup) {
    await Database.asyncQuery(userQueries.UPDATE_LAUNDRY_PICKUP, [userLaundryPickup, userLaundryPickup.id]);
    return await Database.asyncQuery(userQueries.GET_LAUNDRY_PICKUP_BY_USER_ID, [userLaundryPickup.user_id]);
  },


  // Laundry drop off service
  getLaundryDropOffById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_LAUNDRY_DROPOFF_BY_ID, [id]);
  },
  getLaundryDropOffByUserId: async function (userId) {
    return await Database.asyncQuery(userQueries.GET_LAUNDRY_DROPOFF_BY_USER_ID, [userId]);
  },
  createLaundryDropOff: async function (userLaundryDropOff) {
    return await Database.asyncQuery(userQueries.CREATE_LAUNDRY_DROPOFF, [userLaundryDropOff]);
  },
  updateLaundryDropOff: async function (userLaundryDropOff) {
    await Database.asyncQuery(userQueries.UPDATE_LAUNDRY_DROPOFF, [userLaundryDropOff, userLaundryDropOff.id]);
    return await Database.asyncQuery(userQueries.GET_LAUNDRY_DROPOFF_BY_ID, [userLaundryDropOff.id]);
  },

  // All services
  getServiceById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_SERVICE_BY_ID, [id]);
  },
  getAllServices: async function () {
    return await Database.asyncQuery(userQueries.GET_SERVICE_ALL, []);
  },
  deleteService: async function (id) {
    return await Database.asyncQuery(userQueries.DELETE_SERVICE, [id]);
  },
  updateService: async function (service) {
    await Database.asyncQuery(userQueries.UPDATE_SERVICE, [service, service.id]);
    return await Database.asyncQuery(userQueries.GET_SERVICE_BY_ID, [service.id]);
  },

  // All users base upon location
  getUsersByPropertyCode: async function (id) {
    return await Database.asyncQuery(userQueries.GET_USER_BY_PEROPERTY_CODE, [id]);
  },
  getCaptainsByPropertyCode: async function (id, captainId) {
    if(captainId == "")
    return await Database.asyncQuery(userQueries.GET_CAPTAIN_BY_PEROPERTY_CODE, [id]);
    else
    return await Database.asyncQuery(userQueries.GET_CAPTAIN_BY_USER_ID, [id, captainId]);
  },

  // All services
  getRestrictedServiceById: async function (id) {
    return await Database.asyncQuery(userQueries.GET_RESTRICTED_SERVICE_BY_ID, [id]);
  },
  getAllRestrictedServices: async function () {
    return await Database.asyncQuery(userQueries.GET_RESTRICTED_SERVICES_ALL, []);
  },
  createRestrictedService: async function (service) {
    return await Database.asyncQuery(userQueries.CREATE_RESTRICTED_SERVICE, [service]);
  },
  deleteRestrictedService: async function (id) {
    return await Database.asyncQuery(userQueries.DELETE_RESTRICTED_SERVICE, [id]);
  },
  updateRestrictedService: async function (service) {
    await Database.asyncQuery(userQueries.UPDATE_RESTRICTED_SERVICE, [service, service.id]);
    return await Database.asyncQuery(userQueries.GET_RESTRICTED_SERVICE_BY_ID, [service.id]);
  },
  
  getAllServiceLastWeek: async function(service_id){
     if(service_id == 5)
       return Database.asyncQuery(userQueries.GET_ALL_ERRAND_FLOWER_DELIVERY, []);
       else if(service_id == 6)
       return Database.asyncQuery(userQueries.GET_ALL_ERRAND_RX_PICKUP, []);
       else if(service_id == 7)
       return Database.asyncQuery(userQueries.GET_ALL_ERRAND_GENERAL, []);
       else if(service_id == 8)
       return Database.asyncQuery(userQueries.GET_ALL_GROCERY_SHOPPING, []);
       else if(service_id == 10)
       return Database.asyncQuery(userQueries.GET_ALL_HOUSE_KEEPING, []);
       else if(service_id == 15)
       return Database.asyncQuery(userQueries.GET_ALL_LAUNDRY_PICKUP, []);
       else if(service_id == 16)
       return Database.asyncQuery(userQueries.GET_ALL_LAUNDRY_DROP_OFF, []);
       else if(service_id == 17)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_ONQUEST, []);
       else if(service_id == 18)
       return Database.asyncQuery(userQueries.SET_SERVICE_ENABLE_DISABLE_PACKAGE_PICKUP, []);
  },

  getOnquestCleanTypes: async function () {
    return await Database.asyncQuery(userQueries.GET_ONQUEST_CLEAN_TYPES, []);
  },
}

module.exports = profile;
