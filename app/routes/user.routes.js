
module.exports = app => {
  const user = require("../controllers/user.controller.js");
  const userProfiles = require("../controllers/profiles.controller");
  const service = require("../controllers/services.controller");
  const mailer = require("../services/mailer.js");
  const location = require("../controllers/building.controller.js");
  const vendor = require("../controllers/vendor.controller.js");
  
  // Authenticate user
  app.post("/user/authenticate", user.singIn);

  // update resident password
  app.post("/resident/updatepassword", user.updateCaptainPassword);

  // update captain password
  app.post("/captain/updatepassword", user.updateCaptainPassword);

  // Get user by id
  app.post("/user/getuser", user.getUserById);

  // Delete user by id
  app.post("/user/delete", user.deleteUser);
  
  // Get user by id
  app.post("/user/getuserbyemail", user.getUserByEmail);

  // Get Captains/Concierges
  app.get("/user/getcaptains", user.getAllCaptainsConcierges);

  // Get all residents
  app.get("/user/getresidents", user.getAllResidents);

  // Get all users
   app.post("/user/allusers", user.getAllUsers);

  // Get all profiles
   app.post("/user/allprofiles", user.getUserAllProfiles);

  // Create a new user
  app.post("/user/signup", user.create);

  // Update new user verified
  app.post("/user/verification", user.verifyUser);

  // Create user profile
  app.post("/user/profile", user.createUserProfile);

  // Create resident note
  app.post("/user/notes/create", user.createNotes);

  // Update resident note
  app.post("/user/notes/update", user.updateNotes);

  // Delete resident note
  app.post("/user/notes/delete", user.deleteNotes);
  
  // Get all resident notes
  app.post("/user/notes/get", user.getNotes);
  
  // Create user pet profile
  app.post("/profile/pet", userProfiles.pet);

  // Update user pet profile
  app.post("/profile/pet/update", userProfiles.updatePetProfile);

  // GET user pet profile
  app.post("/profile/pet/get", userProfiles.getPetProfileByUserId);

  // Create user housekeeping profile
  app.post("/profile/housekeeping", userProfiles.housekeeping);

  // Update user housekeeping profile
  app.post("/profile/housekeeping/update", userProfiles.updateHousekeeping);

  // Get user housekeeping profile
  app.post("/profile/housekeeping/get", userProfiles.getHousekeeping);

  // Create user grocery profile
  app.post("/profile/grocery", userProfiles.grocery);

  // Update user grocery profile
  app.post("/profile/grocery/update", userProfiles.updateGrocery);

  // Get user grocery profile
  app.post("/profile/grocery/get", userProfiles.getGrocery);

  // Create user rxpickup profile
  app.post("/profile/rxpickup", userProfiles.rxpickup);

  // Update user rxpickup profile
  app.post("/profile/rxpickup/update", userProfiles.updateRxpickup);

  // Get user rxpickup profile
  app.post("/profile/rxpickup/get", userProfiles.getRxpickup);

  // Handy man service
  app.post("/service/handyman", service.handyMan);

  // Update handy man service
  app.post("/service/handyman/update", service.updateHandyMan);

  // Get handy man service
  app.post("/service/handyman/get", service.getHandyMan);

  // Onquest clean service
  app.post("/service/onquestclean/create", service.createOnquestClean);

  // Update Onquest clean  service
  app.post("/service/onquestclean/update", service.updateOnquestClean);

  // Get Onquest clean  service
  app.post("/service/onquestclean/get", service.getOnquestClean);

  // package pickup service
  app.post("/service/packagepickup/create", service.createPackagePickup);

  // Update package pickup  service
  app.post("/service/packagepickup/update", service.updatePackagePickup);

  // Get package pickup  service
  app.post("/service/packagepickup/get", service.getPackagePickup);

   // Mobile car wash service
   app.post("/service/mobilecarwash", service.createMobileCarWash);

   // Update mobile car wash service
   app.post("/service/mobilecarwash/update", service.updateMobileCarWash);
 
   // Get mobile car wash service
   app.post("/service/mobilecarwash/get", service.getMobileCarWash);

   // Pet care service
   app.post("/service/petcare", service.petCare);

   // Update pet care service
   app.post("/service/petcare/update", service.updatePetCare);
 
   // Get pet care service
   app.post("/service/petcare/get", service.getPetCare);

   // Special request service
   app.post("/service/specialrequest", service.specialRequest);

   // Update special request service
   app.post("/service/specialrequest/update", service.updateSpecialRequest);
 
   // Get special request service
   app.post("/service/specialrequest/get", service.getSpecialRequest);

   // errandflowerdeliver service
   app.post("/service/errandflowerdelivery", service.errandFlowerDelivery);

   // Update errandflowerdeliver service
   app.post("/service/errandflowerdelivery/update", service.updateErrandFlowerDelivery);
 
   // Get errandflowerdeliver service
   app.post("/service/errandflowerdelivery/get", service.getErrandFlowerDelivery);

   // Errand general service
   app.post("/service/errandgeneral", service.errandGeneral);

   // Update errand general service
   app.post("/service/errandgeneral/update", service.updateErrandGeneral);
 
   // Get errand general service
   app.post("/service/errandgeneral/get", service.getErrandGeneral);

    // Errand rx-pickup service
    app.post("/service/errandrxpickup", service.errandRxPickup);

    // Update errand RxPickup service
    app.post("/service/errandrxpickup/update", service.updateErrandRxPickup);
  
    // Get errand RxPickup service
    app.post("/service/errandrxpickup/get", service.getErrandRxPickup);

    // Get all services
    app.post("/services/get", service.getServices);

    // Get terms and conditions
    app.get("/termsandconditions/get", user.getTermsAndConditions);

    // Get building by id
    app.post("/building/get", service.getBuilding);

    // Send email
    app.post("/email/verification", mailer.reSendEmailVerification);

    // Create location
    app.post("/location/create", location.createLocation);

    // Update location
    app.post("/location/update", location.updateLocation);

    // Delete location
    app.post("/location/delete", location.deleteLocation);

    // Get locations
    app.get("/location/getall", location.getAllLocations);

    // Update location service day
    app.post("/location/serviceday/update", location.updateServiceDay);

    // Create vendor
    app.post("/vendor/create", vendor.createVendor);

    // Update vendor
    app.post("/vendor/update", vendor.updateVendor);

    // Delete vendor
    app.post("/vendor/delete", vendor.deleteVendor);

    // Get vendor
    app.post("/vendor/get", vendor.getVendor);

    // Get all vendors
    app.get("/vendor/getall", vendor.getAllVendors);

    // Assing vendor to lcoation
    app.post("/vendor/assign", vendor.assignVendor);

     // Assing captain to lcoation
     app.post("/captain/assign", user.assignCaptain);

     // Enable disable service
     app.post("/user/services/enabledisable", service.createResidentBaseEnableDisableService);

     // Update enable disable service
     app.post("/user/services/enabledisable/update", service.updateResidentBaseEnableDisableService);

     // Get enable disable service
     app.post("/user/services/enabledisable/get", service.getServiceEnableDisable);

     // Create grocery item
     app.post("/groceryitem/create", service.createGroceryItem);

     // Update grocery item
     app.post("/groceryitem/update", service.updateGroceryItem);

     // Get all grocery items
     app.get("/groceryitem/get", service.getGroceryItems);

     // Create grocery list
     app.post("/grocerylist/create", service.createGroceryList);

     // Update grocery list
     app.post("/grocerylist/update", service.updateGroceryList);

     // Get grocery list
     app.post("/grocerylist/get", service.getGroceryLists);

     // Delete grocery list
     app.post("/grocerylist/delete", service.deleteGroceryList);

     // Create grocery list items
     app.post("/groceryuseritems/add", service.addUserGroceryItems);

     // Create grocery list items
     app.post("/groceryuseritems/update", service.updateUserGroceryItems);

     // Get grocery list items
     app.post("/groceryuseritems/get", service.getGroceryListsItems);

     // Delete grocery list items
     app.post("/groceryuseritems/delete", service.deleteUserGroceryItem);
  
     // Create laundry pickup
     app.post("/service/laundrypickup/create", service.createLaundryPickup);

     // Update laundry pickup
     app.post("/service/laundrypickup/update", service.updateLaundryPickup);
  
     // Get all laundry pickup
     app.post("/service/laundrypickup/get", service.getLaundryPickup);

     // Create laundry drop off
     app.post("/service/laundrydropoff/create", service.createLaundryDropOff);

     // Update laundry drop off
     app.post("/service/laundrydropoff/update", service.updateLaundryDropOff);
  
     // Get laundry drop off
     app.post("/service/laundrydropoff/get", service.getLaundryDropOff);

     // Get all services
     app.get("/service/getAll", service.getAllServices);

     // Update services
     app.post("/service/update", service.updateService);

     // Get services
     app.post("/service/get", service.getServiceById);
  
     // Delete services
     app.post("/service/delete", service.deleteServiceById);

     // Get all restricted services
     app.get("/service/restricted/getAll", service.getAllRestrictedServices);

     // Create restricted services
     app.post("/service/restricted/create", service.createRestrictedService);

     // Update restricted services
     app.post("/service/restricted/update", service.updateRestrictedService);

     // Get restricted services
     app.post("/service/restricted/get", service.getRestrictedServiceById);
  
     // Delete restricted services
     app.post("/service/restricted/delete", service.deleteRestrictedService);

     // Get all captain with property code
     app.get("/captainbuilding/getall", location.getAllCaptainsWithPropertyCode);

     // Get all user services base upon location 
     app.post("/location/services/get", service.getServicesBasedUponLocation);

     // Get all user services base upon location 
     app.post("/location/services/getbypropertycode", service.getServicesBasedUponLocationByPropertyCode);

     // Get all last week services
     app.get("/user/services/getall", service.getAllLastWeekSevices);

     // Forgot password
     app.post("/user/resetpassword", user.forgotPassword);

     // Payment details
     app.post("/user/payment", service.paymentDetails);

     // Get payment details
     app.post("/user/getpaymentdetails", service.getPaymentDetails);

     // Get payment details
     app.get("/service/onquestcleantypes", service.getOnquestCleanTypes);
  
     // Add marketing image
     app.post("/marketingimage/add", user.addMarketingImage);

     // Update marketing image
     app.post("/marketingimage/update", user.updateMarketingImage);

     // Delete marketing image
     app.post("/marketingimage/delete", user.deleteMarketingImage);

     // Get marketing image
     app.post("/marketingimage/get", user.getMarketingImage);

     // Get all marketing image
     app.get("/marketingimage/getall", user.getAllMarketingImage);
  
     // Update errand flower delivery service
     app.post("/service/errandrxpickupservice/update", service.updateErrandRxPickupService);

     // Update marketing image
     app.post("/service/errandflowerdeliveryservice/update", service.updateErrandFlowerDeliveryService);
 
     // Update marketing image
     app.post("/grocerylistservice/update", service.updateGroceryListService);
  
     // Get preferences 
     app.post("/preferences/get", user.getPrefrences);

     // Update preferences
     app.post("/preferences/update", user.updatePrefrences);
  
     // Send email to resident/captain
     app.post("/email/send", user.sendCustomEmail);
     
};
