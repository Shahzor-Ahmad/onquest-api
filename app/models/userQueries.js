const UserQueries = {
    GET_USER_BY_ID:
        `SELECT user.*,user_profile.*,b.property_name FROM user INNER JOIN user_profile ON user.id = user_profile.user_id INNER JOIN building AS b ON user.building_id = b.property_code WHERE user.id = ?;`,
    GET_ALL_RESIDENTS:
        `SELECT user.email, user.building_id, user.phone, user_profile.first_name, user_profile.last_name, user_profile.user_id, user_profile.created_at,user_profile.street_name, user_profile.city, user_profile.state, user_profile.any_pets, user_profile.profile_picture_url, user_profile.user_profile_service_day, user_profile.meet_greet_status, user_profile.meet_greet_date_time, user_profile.assigned_captain_id, b.property_name, b.service_day FROM user JOIN user_profile ON user.id = user_profile.user_id JOIN building as b ON b.property_code = user.building_id WHERE user.user_type_id = 1;`,
    GET_ALL_CAPTAINS:
        `SELECT * FROM user INNER JOIN user_profile ON user.id = user_profile.user_id INNER JOIN building ON building.property_code = user.building_id WHERE user_type_id = 2 or user_type_id = 3;`,
    GET_ALL_RESIDENTS_BY_BUILDING_ID:
        `SELECT * FROM user JOIN user_profile ON user.id = user_profile.user_id JOIN user_type ON user.user_type_id = user_type.id INNER JOIN building ON building.property_code = user.building_id WHERE user_type_id = 1 and user.building_id = ?;`,
    GET_ALL_CAPTAINS_BY_BUILDING_ID:
        `SELECT * FROM user INNER JOIN user_profile ON user.id = user_profile.user_id JOIN user_type ON user.user_type_id = user_type.id WHERE (building_id = ? or additional_building LIKE ?) AND (user_type_id = 2 or user_type_id = 3);`,
    GET_PET_PROFILE:
        `SELECT * FROM pet_profile WHERE pet_profile.user_id = ?`,
    GET_HOUSEKEEPING_PROFILE:
        `SELECT * FROM house_keeping WHERE house_keeping.user_id = ?;`,
    GET_GROCERY_PROFILE:
        `SELECT * FROM grocery_shopping WHERE grocery_shopping.user_id = ?`,
    GET_RX_PICKUP_PROFILE:
        `SELECT * FROM rx_pickup WHERE rx_pickup.user_id = ?`,
    GET_TERMS_AND_CONDITIONS:
        `SELECT * FROM terms_conditions;`,
    AUTHENTICATE_USER_BY_USERNAME_PASSWORD:
        `SELECT * FROM user WHERE email = ? and password = ? and user_type_id = ?;`,
    AUTHENTICATE_CAPTAIN_BY_USERNAME_PASSWORD:
        `SELECT * FROM user WHERE email = ? and password = ? and user_type_id = ?;`,
    AUTHENTICATE_ADMIN_BY_USERNAME_PASSWORD:
        `SELECT * FROM user WHERE (email = ? and password = ?) and (user_type_id = 3 OR user_type_id = 4 OR user_type_id = 5);`,
    CHECK_USER:
        `SELECT * FROM user WHERE email = ?;`,
    CREATE_USER:
        `INSERT INTO user SET ?;`,
    CREATE_USER_PROFILE:
        `INSERT INTO user_profile SET ?;`,
    UPDATE_USER:
        `UPDATE user SET user_verified = ? WHERE user.id = ?`,
    UPDATE_USER_CAPTAIN:
        `UPDATE user SET ? WHERE user.id = ?`,
    GET_USER_PROFILE:
        `SELECT * FROM user INNER JOIN user_profile ON user.id = user_profile.user_id WHERE user.id = ?;`,
    UPDATE_USER_PROFILE:
        `UPDATE user_profile SET ? WHERE user_profile.user_id = ?`,
    UPDATE_USER_BUILDING_ID:
        `UPDATE user SET building_id = ?, additional_building = ?  WHERE user.id = ?`,
    ASSIGN_CAPTAIN:
        `INSERT INTO captain_building SET ?;`,
    GET_CAPTAIN_BY_ID_WITH_LCOATION:
        `SELECT * FROM user_profile INNER JOIN captain_building ON user_profile.id = captain_building.captain_id WHERE user_profile.id = ?;`,
    DELETE_USER:
        `DELETE FROM user WHERE user.id = ?;`,
    // Marketing images
    ADD_MARKETING_IMAGE:
        `INSERT INTO marketingImages SET ?;`,
    ADD_PEROPERTY_MARKETING_IMAGE:
        `INSERT INTO propertyMarketingImages SET ?;`,
    UPDATE_MARKETING_IMAGE:
        `UPDATE marketingImages SET ? WHERE marketingImages.marketing_image_id = ?;`,
    UPDATE_PEROPERTY_MARKETING_IMAGE:
        `UPDATE propertyMarketingImages SET ? WHERE propertyMarketingImages.marketing_image_id = ? and propertyMarketingImages.property_code = ?;`,
    DISABLE_ALL_MARKETING_IMAGES:
        `UPDATE propertyMarketingImages SET status = 'false' WHERE propertyMarketingImages.property_marketing_image_id != ? and propertyMarketingImages.property_code = ?;`,
    GET_MARKETING_IMAGE_BY_ID:
        `SELECT i.*, pi.status, pi.property_marketing_image_id, pi.property_code, pi.marketing_image_id FROM marketingImages AS i INNER JOIN propertyMarketingImages AS pi ON pi.marketing_image_id = i.marketing_image_id  WHERE i.marketing_image_id = ?;`,
    GET_ALL_MARKETING_IMAGES:
        `SELECT i.*, pi.status, pi.property_marketing_image_id, pi.property_code FROM marketingImages AS i INNER JOIN propertyMarketingImages AS pi ON pi.marketing_image_id = i.marketing_image_id;`,
    DELETE_MARKETING_IMAGE:
        `DELETE FROM marketingImages WHERE marketingImages.marketing_image_id = ?;`,
    DELETE_ALL_MARKETING_IMAGES_PROPERTY:
        `DELETE FROM propertyMarketingImages WHERE propertyMarketingImages.marketing_image_id = ? || propertyMarketingImages.property_code = ?;`,
    
    // Get building by property code
    GET_BUILDING_BY_CODE:
        `SELECT * FROM building WHERE building.property_code = ?;`,
    
    // Preferences
    UPDATE_PREFRENCES:
        `UPDATE preferences SET ? WHERE preferences.user_id = ?`,
    ADD_PREFRENCES:
        `INSERT INTO preferences SET ?;`,
    GET_PREFRENCES:
        `SELECT * FROM preferences WHERE preferences.user_id = ?;`,
    
    
    // Resident notes
    CREATE_RESIDENT_NOTES:
        `INSERT INTO residentNotes SET ?;`,
    GET_RESIDENT_NOTES:
        `SELECT * FROM residentNotes WHERE residentNotes.user_id = ?;`,
    UPDATE_RESIDENT_NOTES:
        `UPDATE residentNotes SET ? WHERE residentNotes.id = ?`,
    DELETE_RESIDENT_NOTES:
        `DELETE FROM residentNotes WHERE residentNotes.id = ?;`,
};

module.exports = UserQueries;
