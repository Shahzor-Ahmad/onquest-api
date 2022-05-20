const UserQueries = {

    // Handy Man service queries
    GET_SERVICE_BY_USER_ID:
        `SELECT * FROM handy_man WHERE handy_man.user_id = ?;`,
    GET_SERVICE_BY_ID:
        `SELECT * FROM handy_man WHERE handy_man.id = ?;`,
    CREATE_HANDY_MAN_SERVICE:
        `INSERT INTO handy_man SET ?;`,
    UPDATE_HANDY_MAN_SERVICE:
        `UPDATE handy_man SET ? WHERE handy_man.user_id = ?`,

    // Onquest clean service queries
    GET_ONQUEST_SERVICE_BY_USER_ID:
        `SELECT * FROM onquest_clean WHERE onquest_clean.user_id = ?;`,
    GET_ONQUEST_SERVICE_BY_ID:
        `SELECT * FROM onquest_clean WHERE onquest_clean.id = ?;`,
    CREATE_ONQUEST_SERVICE:
        `INSERT INTO onquest_clean SET ?;`,
    UPDATE_ONQUEST_SERVICE:
        `UPDATE onquest_clean SET ? WHERE onquest_clean.id = ?`,

    // Package pickup service queries
    GET_PACKAGE_PICKUP_SERVICE_BY_USER_ID:
        `SELECT * FROM package_pickup WHERE package_pickup.user_id = ?;`,
    GET_PACKAGE_PICKUP_SERVICE_BY_ID:
        `SELECT * FROM package_pickup WHERE package_pickup.id = ?;`,
    CREATE_PACKAGE_PICKUP_SERVICE:
        `INSERT INTO package_pickup SET ?;`,
    UPDATE_PACKAGE_PICKUP_SERVICE:
        `UPDATE package_pickup SET ? WHERE package_pickup.id = ?`,
    
    
    // Mobile car wash service queries
    GET_MOBILE_CAR_WASH_BY_USER_ID:
        `SELECT * FROM mobile_car_wash WHERE mobile_car_wash.user_id = ?;`,
    GET_MOBILE_CAR_WASH_BY_ID:
        `SELECT * FROM mobile_car_wash WHERE mobile_car_wash.id = ?;`,
    CREATE_MOBILE_CAR_WASH:
        `INSERT INTO mobile_car_wash SET ?;`,
    UPDATE_MOBILE_CAR_WASH:
        `UPDATE mobile_car_wash SET ? WHERE mobile_car_wash.user_id = ?`,

    // Pet care queries
    GET_PET_CARE_BY_USER_ID:
        `SELECT * FROM pet_care WHERE pet_care.user_id = ?;`,
    GET_PET_CARE_PROFILE_ID:
        `SELECT * FROM pet_profile WHERE pet_profile.user_id = ?;`,
    GET_PET_CARE_BY_ID:
        `SELECT * FROM pet_care WHERE pet_care.id = ?;`,
    CREATE_PET_CARE:
        `INSERT INTO pet_care SET ?;`,
    UPDATE_PET_CARE:
        `UPDATE pet_care SET ? WHERE pet_care.user_id = ?`,

    // Special request queries
    GET_SPECIAL_REQUEST_BY_USER_ID:
        `SELECT * FROM special_request WHERE special_request.user_id = ?;`,
    GET_SPECIAL_REQUEST_BY_ID:
        `SELECT * FROM special_request WHERE special_request.id = ?;`,
    CREATE_SPECIAL_REQUEST:
        `INSERT INTO special_request SET ?;`,
    UPDATE_SPECIAL_REQUEST:
        `UPDATE special_request SET ? WHERE special_request.user_id = ?`,

    // Errand flower delivery queries
    GET_ERRAND_FLOWER_DELIVERY_BY_USER_ID:
        `SELECT * FROM errand_flower_delivery WHERE errand_flower_delivery.user_id = ?;`,
    GET_ERRAND_FLOWER_DELIVERY_BY_ID:
        `SELECT * FROM errand_flower_delivery WHERE errand_flower_delivery.id = ?;`,
    CREATE_ERRAND_FLOWER_DELIVERY:
        `INSERT INTO errand_flower_delivery SET ?;`,
    UPDATE_ERRAND_FLOWER_DELIVERY:
        `UPDATE errand_flower_delivery SET ? WHERE errand_flower_delivery.id = ?`,

    // Errand general queries
    GET_ERRAND_GENERAL_BY_USER_ID:
        `SELECT * FROM errand_general WHERE errand_general.user_id = ?;`,
    GET_ERRAND_GENERAL_BY_ID:
        `SELECT * FROM errand_general WHERE errand_general.id = ?;`,
    CREATE_ERRAND_GENERAL:
        `INSERT INTO errand_general SET ?;`,
    UPDATE_ERRAND_GENERAL:
        `UPDATE errand_general SET ? WHERE errand_general.user_id = ?`,

    // Errand rx pickup queries
    GET_ERRAND_RX_PICKUP_BY_USER_ID:
        `SELECT * FROM errand_rx_pickup WHERE errand_rx_pickup.user_id = ?;`,
    GET_ERRAND_RX_PICKUP_PROFILE_ID:
        `SELECT * FROM rx_pickup WHERE rx_pickup.user_id = ?;`,
    GET_ERRAND_RX_PICKUP_BY_ID:
        `SELECT * FROM errand_rx_pickup WHERE errand_rx_pickup.id = ?;`,
    CREATE_ERRAND_RX_PICKUP:
        `INSERT INTO errand_rx_pickup SET ?;`,
    UPDATE_ERRAND_RX_PICKUP:
        `UPDATE errand_rx_pickup SET ? WHERE errand_rx_pickup.id = ?`,
    
    // Get user by id
    GET_USER_BY_ID:
        `SELECT * FROM user INNER JOIN user_profile ON user.id = user_profile.user_id WHERE user.id = ?;`,
    
    // Get restricted services
    GET_RESTRICTED_SERVICES:
        `SELECT * FROM  services_restrictions WHERE criteria in (?, ?, ?, ?);`,

    // Get all services
    GET_ALL_SERVICES:
        `SELECT * FROM service_types;`,

    // Get Building 
    GET_BUILDING_BY_BUILDING_ID:
        `SELECT * FROM building WHERE building.property_code = ?;`,

    // SERVICE ENBALE DISABLE 
    SET_SERVICE_ENABLE_DISABLE:
        `INSERT INTO resident_next_service_day SET ?;`,
    // SERVICE ENBALE DISABLE 
    UPDATE_SERVICE_ENABLE_DISABLE:
        `UPDATE resident_next_service_day SET ? WHERE resident_next_service_day.id = ?;`,
    GET_SERVICE_ENABLE_DISABLE:
        `SELECT * FROM resident_next_service_day WHERE resident_next_service_day.user_id = ?;`,

    // GET ALL USER SERVICES BASED UPON LOCATION
    SET_SERVICE_ENABLE_DISABLE_HANDY_MAN:
        `SELECT * FROM handy_man WHERE handy_man.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_MOBILE_CAR_WASH:
        `SELECT * FROM mobile_car_wash WHERE mobile_car_wash.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_PET_CARE:
        `SELECT * FROM pet_care WHERE pet_care.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_SPECIAL_REQUEST:
        `SELECT * FROM special_request WHERE special_request.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_ERRAND_FLOWER_DELIVERY:
        `SELECT * FROM errand_flower_delivery WHERE errand_flower_delivery.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_ERRAND_RX_PICKUP:
        `SELECT * FROM errand_rx_pickup WHERE errand_rx_pickup.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_ERRAND_GENERAL:
        `SELECT * FROM errand_general WHERE errand_general.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_GROCERY_SHOPPING:
        `SELECT * FROM UserGroceryList WHERE UserGroceryList.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_HOUSE_KEEPING:
        `SELECT * FROM house_keeping WHERE house_keeping.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_LAUNDRY_PICKUP:
        `SELECT * FROM laundryPickup WHERE laundryPickup.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_LAUNDRY_DROP_OFF:
        `SELECT * FROM laundryDropOff WHERE laundryDropOff.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_ONQUEST_CLEAN:
        `SELECT * FROM onquest_clean WHERE onquest_clean.user_id = ?;`,
    SET_SERVICE_ENABLE_DISABLE_PACKAGE_PICKUP_SERVICE:
        `SELECT * FROM package_pickup WHERE package_pickup.user_id = ?;`,

    // Grocery items
    GET_GROCERY_ITEMS:
        `SELECT * FROM GroceryItems;`,
    CREATE_GROCERY_ITEM:
        `INSERT INTO GroceryItems SET ?;`,
    UPDATE_GROCERY_ITEM:
        `UPDATE GroceryItems SET ? WHERE GroceryItems.id = ?`,

    // Grocery lists
    GET_GROCERY_LISTS:
        `SELECT * FROM UserGroceryList WHERE UserGroceryList.user_id = ?;`,
    GET_GROCERY_LISTS_BY_ID:
        `SELECT * FROM UserGroceryList WHERE UserGroceryList.id = ?;`,
    CREATE_GROCERY_LIST:
        `INSERT INTO UserGroceryList SET ?;`,
    UPDATE_GROCERY_LIST:
        `UPDATE UserGroceryList SET ? WHERE UserGroceryList.id = ?;`,
    DELETE_GROCERY_LIST:
        `DELETE FROM UserGroceryList WHERE UserGroceryList.id = ?;`,

    // User Grocery items
    // GET_USER_GROCERY_ITEMS:
    //     `SELECT * FROM GroceryItemsUserAdded WHERE GroceryItemsUserAdded.user_id = ?;`,
    CREATE_USER_GROCERY_ITEM:
        `INSERT INTO GroceryItemsUserAdded SET ?;`,
    ADD_USER_GROCERY_ITEM_WITH_LIST:
        `INSERT INTO UserGroceryListItems SET ?;`,
    DELETE_GROCERY_ITEM:
        `DELETE FROM UserGroceryListItems WHERE UserGroceryListItems.item_id = ? and UserGroceryListItems.list_id = ?;`,
    UPDATE_USER_GROCERY_ITEM:
        `UPDATE GroceryItemsUserAdded SET ? WHERE GroceryItemsUserAdded.id = ?;`,
    // DELETE_USER_GROCERY_ITEM:
    //     `DELETE FROM GroceryItemsUserAdded WHERE GroceryItemsUserAdded.id = ?;`,
    GET_GROCERY_ITEMS_BY_LIST_ID:
        `SELECT * FROM UserGroceryListItems INNER JOIN GroceryItemsUserAdded ON UserGroceryListItems.item_id = GroceryItemsUserAdded.id WHERE UserGroceryListItems.list_id = ?;`,

    // Laundry pickup service queries
    GET_LAUNDRY_PICKUP_BY_USER_ID:
      `SELECT * FROM laundryPickup WHERE laundryPickup.user_id = ?;`,
    GET_LAUNDRY_PICKUP_BY_ID:
      `SELECT * FROM laundryPickup WHERE laundryPickup.id = ?;`,
    CREATE_LAUNDRY_PICKUP:
      `INSERT INTO laundryPickup SET ?;`,
    UPDATE_LAUNDRY_PICKUP:
      `UPDATE laundryPickup SET ? WHERE laundryPickup.id = ?`,

    // Laundry drop off service queries
    GET_LAUNDRY_DROPOFF_BY_USER_ID:
        `SELECT * FROM laundryDropOff WHERE laundryDropOff.user_id = ?;`,
    GET_LAUNDRY_DROPOFF_BY_ID:
        `SELECT * FROM laundryDropOff WHERE laundryDropOff.id = ?;`,
    CREATE_LAUNDRY_DROPOFF:
        `INSERT INTO laundryDropOff SET ?;`,
    UPDATE_LAUNDRY_DROPOFF:
        `UPDATE laundryDropOff SET ? WHERE laundryDropOff.id = ?`,

    // All service queries
    GET_SERVICE_BY_ID:
        `SELECT * FROM service_types WHERE service_types.id = ?;`,
    GET_SERVICE_ALL:
        `SELECT * FROM service_types;`,
    DELETE_SERVICE:
        `DELETE FROM service_types WHERE service_types.id = ?;`,
    UPDATE_SERVICE:
        `UPDATE service_types SET ? WHERE service_types.id = ?`,

    // All restricted service queries
    GET_RESTRICTED_SERVICE_BY_ID:
        `SELECT * FROM services_restrictions WHERE services_restrictions.id = ?;`,
    GET_RESTRICTED_SERVICES_ALL:
        `SELECT * FROM service_types JOIN services_restrictions ON service_types.id = services_restrictions.service_id;`,
    CREATE_RESTRICTED_SERVICE:
        `INSERT INTO services_restrictions SET ?;`,
    DELETE_RESTRICTED_SERVICE:
        `DELETE FROM services_restrictions WHERE services_restrictions.id = ?;`,
    UPDATE_RESTRICTED_SERVICE:
        `UPDATE services_restrictions SET ? WHERE services_restrictions.id = ?`,

    // Get onquest clean types
    GET_ONQUEST_CLEAN_TYPES:
        `SELECT * FROM onquest_clean_types`,

    // All users base upon location/property code
    GET_USER_BY_PEROPERTY_CODE:
        `SELECT user.user_type_id, user.building_id, user_profile.user_id, user_profile.first_name, user_profile.last_name, user_profile.profile_picture_url FROM user INNER JOIN user_profile ON user.id = user_profile.user_id WHERE user.building_id = ? and user.user_type_id = 1;`,
    // All captains base upon location/property code
    GET_CAPTAIN_BY_PEROPERTY_CODE:
        `SELECT user.id, user.user_type_id, user_profile.first_name, user_profile.last_name, user_profile.profile_picture_url FROM user INNER JOIN user_profile ON user.id = user_profile.user_id WHERE user.building_id = ? and user.user_type_id = 2;`,

    // All captains base upon location/property code
    GET_CAPTAIN_BY_USER_ID:
    `SELECT user.id, user.user_type_id, user_profile.first_name, user_profile.last_name, user_profile.profile_picture_url FROM user INNER JOIN user_profile ON user.id = user_profile.user_id WHERE user.building_id = ? and user.id = ? and user.user_type_id = 2;`,

    // Get all services from last week to current date
    GET_ALL_ERRAND_FLOWER_DELIVERY:
        `SELECT e.*, u.first_name, u.last_name, u.assigned_captain_id, u.user_profile_service_day, us.building_id, u.user_id, b.property_name, b.service_day, s.* 
        FROM errand_flower_delivery AS e 
        INNER JOIN user_profile AS u ON e.user_id = u.user_id 
        INNER JOIN user AS us ON u.user_id = us.id AND us.user_type_id = 1
        INNER JOIN building AS b ON b.property_code = us.building_id 
        INNER JOIN service_types AS s ON e.service_type_id = s.id 
        WHERE e.created_at between date_sub(now(),INTERVAL 1 WEEK) and now();`,
    GET_ALL_ERRAND_RX_PICKUP:
        `SELECT e.*, u.first_name, u.last_name, u.assigned_captain_id, u.user_profile_service_day, us.building_id, u.user_id, b.property_name, b.service_day, s.* 
        FROM errand_rx_pickup AS e 
        INNER JOIN user_profile AS u ON e.user_id = u.user_id 
        INNER JOIN user AS us ON u.user_id = us.id AND us.user_type_id = 1
        INNER JOIN building AS b ON b.property_code = us.building_id 
        INNER JOIN service_types AS s ON e.service_type_id = s.id 
        WHERE e.created_at between date_sub(now(),INTERVAL 1 WEEK) and now();`,
    GET_ALL_ERRAND_GENERAL:
        `SELECT e.*, u.first_name, u.last_name, u.assigned_captain_id, u.user_profile_service_day, u.user_id, us.building_id, u.user_id, b.property_name, b.service_day, s.* 
        FROM errand_general AS e  
        INNER JOIN user_profile AS u ON e.user_id = u.user_id 
        INNER JOIN user AS us ON u.user_id = us.id AND us.user_type_id = 1
        INNER JOIN building AS b ON b.property_code = us.building_id 
        INNER JOIN service_types AS s ON e.service_type_id = s.id 
        WHERE e.created_at between date_sub(now(),INTERVAL 1 WEEK) and now();`,
    GET_ALL_GROCERY_SHOPPING:
        `SELECT g.id as list_id, g.listname, g.comment, g.service_type_id, g.user_id, g.created_at,g.service_enable, g.service_completed, g.is_paid, g.total_amount, g.payment_invoice, g.payment_message, g.created_at, g.updated_at, u.first_name, u.last_name, u.assigned_captain_id, u.user_profile_service_day, us.building_id, u.user_id, b.property_name, b.service_day, s.* 
        FROM UserGroceryList AS g 
        INNER JOIN user_profile AS u ON g.user_id = u.user_id 
        INNER JOIN user AS us ON u.user_id = us.id AND us.user_type_id = 1
        INNER JOIN building AS b ON b.property_code = us.building_id 
        INNER JOIN service_types AS s ON g.service_type_id = s.id 
        WHERE g.created_at between date_sub(now(),INTERVAL 1 WEEK) and now();`,
    GET_ALL_HOUSE_KEEPING:
        `SELECT h.*, u.first_name, u.last_name, u.assigned_captain_id, u.user_profile_service_day, us.building_id, u.user_id, b.property_name, b.service_day, s.* 
        FROM house_keeping AS h 
        INNER JOIN user_profile AS u ON h.user_id = u.user_id 
        INNER JOIN user AS us ON u.user_id = us.id AND us.user_type_id = 1
        INNER JOIN building AS b ON b.property_code = us.building_id 
        INNER JOIN service_types AS s ON h.service_type_id = s.id 
        WHERE h.created_at between date_sub(now(),INTERVAL 1 WEEK) and now();`,
    GET_ALL_LAUNDRY_PICKUP:
        `SELECT l.*, u.first_name, u.last_name, u.assigned_captain_id, u.user_profile_service_day, us.building_id, u.user_id, b.property_name, b.service_day, s.* 
        FROM laundryPickup AS l 
        INNER JOIN user_profile AS u ON l.user_id = u.user_id 
        INNER JOIN user AS us ON u.user_id = us.id AND us.user_type_id = 1
        INNER JOIN building AS b ON b.property_code = us.building_id 
        INNER JOIN service_types AS s ON l.service_type_id = s.id 
        WHERE l.created_at between date_sub(now(),INTERVAL 1 WEEK) and now();`,
    GET_ALL_LAUNDRY_DROP_OFF:
        `SELECT l.*, u.first_name, u.last_name, u.assigned_captain_id, u.user_profile_service_day, us.building_id, u.user_id, b.property_name, b.service_day, s.* 
        FROM laundryDropOff AS l 
        INNER JOIN user_profile AS u ON l.user_id = u.user_id 
        INNER JOIN user AS us ON u.user_id = us.id AND us.user_type_id = 1
        INNER JOIN building AS b ON b.property_code = us.building_id 
        INNER JOIN service_types AS s ON l.service_type_id = s.id 
        WHERE l.created_at between date_sub(now(),INTERVAL 1 WEEK) and now();`,

    SET_SERVICE_ENABLE_DISABLE_ONQUEST:
        `SELECT o.*, u.first_name, u.last_name, u.assigned_captain_id, u.user_profile_service_day, us.building_id, u.user_id, b.property_name, b.service_day, s.* 
        FROM onquest_clean AS o 
        INNER JOIN user_profile AS u ON o.user_id = u.user_id 
        INNER JOIN user AS us ON u.user_id = us.id AND us.user_type_id = 1
        INNER JOIN building AS b ON b.property_code = us.building_id 
        INNER JOIN service_types AS s ON o.service_type_id = s.id 
        WHERE o.created_at between date_sub(now(),INTERVAL 1 WEEK) and now();`,

    SET_SERVICE_ENABLE_DISABLE_PACKAGE_PICKUP:
        `SELECT p.*, u.first_name, u.last_name, u.assigned_captain_id, u.user_profile_service_day, us.building_id, u.user_id, b.property_name, b.service_day, s.* 
        FROM package_pickup AS p 
        INNER JOIN user_profile AS u ON p.user_id = u.user_id 
        INNER JOIN user AS us ON u.user_id = us.id AND us.user_type_id = 1
        INNER JOIN building AS b ON b.property_code = us.building_id 
        INNER JOIN service_types AS s ON p.service_type_id = s.id 
        WHERE p.created_at between date_sub(now(),INTERVAL 1 WEEK) and now();`,
    
    // Get all services from grocery shopping table
    GET_ALL_SERVICES_GROCERY_SHOPPING:
    `select uzr.id as user_id, 
    up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, 
    b.property_name, b.service_day, 
    st.service_name, st.description, st.service_type, st.service_image, 
    uzr.building_id as building_code, uzr.phone, 
    g.id as list_id, g.listname, g.comment, g.service_type_id, g.user_id, g.service_enable, g.service_completed, g.service_completed_date, g.is_paid, g.total_amount, g.payment_invoice, g.payment_message, g.created_at, g.updated_at 
    from user as uzr 
    inner join UserGroceryList as g ON g.user_id = uzr.id 
    inner join user_profile as up ON up.user_id = uzr.id 
    inner join service_types as st ON st.id = g.service_type_id 
    inner join building as b ON b.property_code = uzr.building_id 
    where uzr.building_id= ? and uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_GROCERY_SHOPPING_All_RESIDENTS:
    `select uzr.id as user_id, 
    up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, 
    b.property_name, b.service_day, 
    st.service_name, st.description, st.service_type, st.service_image, 
    uzr.building_id as building_code, uzr.phone, 
    g.id as list_id, g.listname, g.comment, g.service_type_id, g.user_id, g.service_enable, g.service_completed, g.service_completed_date, g.is_paid, g.total_amount, g.payment_invoice, g.payment_message, g.created_at, g.updated_at 
    from user as uzr 
    inner join UserGroceryList as g ON g.user_id = uzr.id 
    inner join user_profile as up ON up.user_id = uzr.id 
    inner join service_types as st ON st.id = g.service_type_id 
    inner join building as b ON b.property_code = uzr.building_id 
    where uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_GROCERY_SHOPPING_BY_CAPTAIN:
    `select uzr.id as user_id, 
    up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, 
    b.property_name, b.service_day, 
    st.service_name, st.description, st.service_type, st.service_image, 
    uzr.building_id as building_code, uzr.phone, g.id as list_id, 
    g.listname, g.comment, g.service_type_id, g.user_id, g.created_at, g.service_enable, g.service_completed, g.service_completed_date, g.is_paid, g.total_amount, g.payment_invoice, g.payment_message, g.created_at, g.updated_at 
    from user as uzr 
    inner join UserGroceryList as g ON g.user_id = uzr.id 
    inner join user_profile as up ON up.user_id = uzr.id 
    inner join service_types as st ON st.id = g.service_type_id 
    inner join building as b ON b.property_code = uzr.building_id 
    where uzr.building_id= ? and up.assigned_captain_id = ? and up.user_profile_service_day = ? and uzr.user_type_id = 1;`, 

    // Get all services from laundry pickup table
    GET_ALL_SERVICES_LAUNDRY_PICKUP:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, lp.id, lp.number_of_items, lp.specific_instruction, lp.service_enable, lp.service_completed, lp.service_completed_date, lp.service_type_id, lp.created_at, lp.updated_at from user as uzr inner join laundryPickup as lp ON lp.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = lp.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_LAUNDRY_PICKUP_All_RESIDENTS:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, lp.id, lp.number_of_items, lp.specific_instruction, lp.service_enable, lp.service_completed, lp.service_completed_date, lp.service_type_id, lp.created_at, lp.updated_at from user as uzr inner join laundryPickup as lp ON lp.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = lp.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_LAUNDRY_PICKUP_BY_CAPTAIN:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, lp.id, lp.number_of_items, lp.specific_instruction, lp.service_enable, lp.service_completed, lp.service_completed_date, lp.service_type_id, lp.created_at, lp.updated_at from user as uzr inner join laundryPickup as lp ON lp.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = lp.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and up.assigned_captain_id = ? and up.user_profile_service_day = ? and uzr.user_type_id = 1;`,

    // Get all services from laundry dropoff table
    GET_ALL_SERVICES_LAUNDRY_DROPOFF:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, ld.id, ld.number_of_items, ld.relevant_information, ld.service_enable, ld.service_completed, ld.service_completed_date, ld.service_type_id, ld.created_at, ld.updated_at from user as uzr inner join laundryDropOff as ld ON ld.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = ld.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_LAUNDRY_DROPOFF_All_RESIDENTS:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, ld.id, ld.number_of_items, ld.relevant_information, ld.service_enable, ld.service_completed, ld.service_completed_date, ld.service_type_id, ld.created_at, ld.updated_at from user as uzr inner join laundryDropOff as ld ON ld.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = ld.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_LAUNDRY_DROPOFF_BY_CAPTAIN:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, ld.id, ld.number_of_items, ld.relevant_information, ld.service_enable, ld.service_completed, ld.service_completed_date, ld.service_type_id, ld.created_at, ld.updated_at from user as uzr inner join laundryDropOff as ld ON ld.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = ld.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and up.assigned_captain_id = ? and up.user_profile_service_day = ? and uzr.user_type_id = 1;`,

    // Get all services from grocery shopping table
    GET_ALL_SERVICES_HOUSE_KEEPING:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, hk.id, hk.number_of_bedrooms, hk.number_of_bathrooms, hk.square_footage, hk.cleaning_supplies, hk.housekeeping_preferences, hk.reminder, hk.notes, hk.service_enable, hk.service_completed, hk.service_completed_date, hk.service_type_id, hk.created_at, hk.last_updated from user as uzr inner join house_keeping as hk ON hk.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = hk.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_HOUSE_KEEPING_All_RESIDENTS:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, hk.id, hk.number_of_bedrooms, hk.number_of_bathrooms, hk.square_footage, hk.cleaning_supplies, hk.housekeeping_preferences, hk.reminder, hk.notes, hk.service_enable, hk.service_completed, hk.service_completed_date, hk.service_type_id, hk.created_at, hk.last_updated from user as uzr inner join house_keeping as hk ON hk.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = hk.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_HOUSE_KEEPING_BY_CAPTAIN:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, hk.id, hk.number_of_bedrooms, hk.number_of_bathrooms, hk.square_footage, hk.cleaning_supplies, hk.housekeeping_preferences, hk.reminder, hk.notes, hk.service_enable, hk.service_completed, hk.service_completed_date, hk.service_type_id, hk.created_at, hk.last_updated from user as uzr inner join house_keeping as hk ON hk.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = hk.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and up.assigned_captain_id = ? and up.user_profile_service_day = ? and uzr.user_type_id = 1;`,
    
    // Get all services from grocery shopping table
    GET_ALL_SERVICES_ERRAND_FLOWER_DELIVERY:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, efd.id, efd.flower_budget, efd.vase, efd.vase_budget, efd.display_flower_area, efd.other_information, efd.notes, efd.service_enable, efd.service_completed, efd.service_completed_date, efd.service_type_id, efd.created_at, efd.last_updated from user as uzr inner join errand_flower_delivery as efd ON efd.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = efd.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_ERRAND_FLOWER_DELIVERY_All_RESIDENTS:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, efd.id, efd.flower_budget, efd.vase, efd.vase_budget, efd.display_flower_area, efd.other_information, efd.notes, efd.service_enable, efd.service_completed, efd.service_completed_date, efd.service_type_id, efd.created_at, efd.last_updated from user as uzr inner join errand_flower_delivery as efd ON efd.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = efd.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_ERRAND_FLOWER_DELIVERY_BY_CAPTAIN:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, efd.id, efd.flower_budget, efd.vase, efd.vase_budget, efd.display_flower_area, efd.other_information, efd.notes, efd.service_enable, efd.service_completed, efd.service_completed_date, efd.service_type_id, efd.created_at, efd.last_updated from user as uzr inner join errand_flower_delivery as efd ON efd.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = efd.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and up.assigned_captain_id = ? and up.user_profile_service_day = ? and uzr.user_type_id = 1;`,

    // Get all services from grocery shopping table
    GET_ALL_SERVICES_ERRAND_RX_PICKUP:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, erp.id, erp.name_of_prescription, erp.payment_required_for_pickup, erp.other_information, erp.notes, erp.service_enable, erp.service_completed, erp.service_completed_date, erp.service_type_id, erp.created_at, erp.last_updated from user as uzr inner join errand_rx_pickup as erp ON erp.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = erp.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_ERRAND_RX_PICKUP_All_RESIDENTS:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, erp.id, erp.name_of_prescription, erp.payment_required_for_pickup, erp.other_information, erp.notes, erp.service_enable, erp.service_completed, erp.service_completed_date, erp.service_type_id, erp.created_at, erp.last_updated from user as uzr inner join errand_rx_pickup as erp ON erp.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = erp.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_ERRAND_RX_PICKUP_BY_CAPTAIN:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, erp.id, erp.name_of_prescription, erp.payment_required_for_pickup, erp.other_information, erp.notes, erp.service_enable, erp.service_completed, erp.service_completed_date, erp.service_type_id, erp.created_at, erp.last_updated from user as uzr inner join errand_rx_pickup as erp ON erp.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = erp.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and up.assigned_captain_id = ? and up.user_profile_service_day = ? and uzr.user_type_id = 1;`,

    // Get all services from grocery shopping table
    GET_ALL_SERVICES_ERRAND_GENERAL:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, eg.id, eg.name_of_general_service, eg.other_information, eg.notes, eg.service_enable, eg.service_completed, eg.service_completed_date, eg.service_type_id, eg.created_at, eg.last_updated from user as uzr inner join errand_general as eg ON eg.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = eg.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_ERRAND_GENERAL_All_RESIDENTS:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, eg.id, eg.name_of_general_service, eg.other_information, eg.notes, eg.service_enable, eg.service_completed, eg.service_completed_date, eg.service_type_id, eg.created_at, eg.last_updated from user as uzr inner join errand_general as eg ON eg.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = eg.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_ERRAND_GENERAL_BY_CAPTAIN:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, eg.id, eg.name_of_general_service, eg.other_information, eg.notes, eg.service_enable, eg.service_completed, eg.service_completed_date, eg.service_type_id, eg.created_at, eg.last_updated from user as uzr inner join errand_general as eg ON eg.user_id = uzr.id inner join user_profile as up ON up.user_id = uzr.id inner join service_types as st ON st.id = eg.service_type_id inner join building as b ON b.property_code = uzr.building_id where uzr.building_id = ? and up.assigned_captain_id = ? and up.user_profile_service_day = ? and uzr.user_type_id = 1;`,

    // Get all services from onquest table
    GET_ALL_SERVICES_ONQUEST:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, o.* 
    from user as uzr 
    inner join onquest_clean as o ON o.user_id = uzr.id 
    inner join user_profile as up ON up.user_id = uzr.id 
    inner join service_types as st ON st.id = o.service_type_id 
    inner join building as b ON b.property_code = uzr.building_id 
    where uzr.building_id = ? and uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_ONQUEST_All_RESIDENTS:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, o.* 
    from user as uzr 
    inner join onquest_clean as o ON o.user_id = uzr.id 
    inner join user_profile as up ON up.user_id = uzr.id 
    inner join service_types as st ON st.id = o.service_type_id 
    inner join building as b ON b.property_code = uzr.building_id 
    where uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_ONQUEST_BY_CAPTAIN:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, up.user_profile_service_day, up.profile_picture_url, uzr.email, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, o.* 
    from user as uzr 
    inner join onquest_clean as o ON o.user_id = uzr.id 
    inner join user_profile as up ON up.user_id = uzr.id 
    inner join service_types as st ON st.id = o.service_type_id 
    inner join building as b ON b.property_code = uzr.building_id 
    where uzr.building_id = ? and up.assigned_captain_id = ? and up.user_profile_service_day = ? and uzr.user_type_id = 1;`,

    // Get all services from package pickup table
    GET_ALL_SERVICES_PACKAGE_PICKUP:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, p.* 
    from user as uzr 
    inner join package_pickup as p ON p.user_id = uzr.id 
    inner join user_profile as up ON up.user_id = uzr.id 
    inner join service_types as st ON st.id = p.service_type_id 
    inner join building as b ON b.property_code = uzr.building_id 
    where uzr.building_id = ? and uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_PACKAGE_PICKUP_All_RESIDENTS:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, up.assigned_captain_id, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, p.* 
    from user as uzr 
    inner join package_pickup as p ON p.user_id = uzr.id 
    inner join user_profile as up ON up.user_id = uzr.id 
    inner join service_types as st ON st.id = p.service_type_id 
    inner join building as b ON b.property_code = uzr.building_id 
    where uzr.user_type_id = 1;`,
    GET_ALL_SERVICES_PACKAGE_PICKUP_BY_CAPTAIN:
    `select uzr.id as user_id, up.first_name, up.last_name, up.unit_number, uzr.email, up.user_profile_service_day, up.profile_picture_url, b.property_name, b.service_day, st.service_name, st.description, st.service_type, st.service_image, uzr.building_id as building_code, uzr.phone, p.* 
    from user as uzr 
    inner join package_pickup as p ON p.user_id = uzr.id 
    inner join user_profile as up ON up.user_id = uzr.id 
    inner join service_types as st ON st.id = p.service_type_id 
    inner join building as b ON b.property_code = uzr.building_id 
    where uzr.building_id = ? and up.assigned_captain_id = ? and up.user_profile_service_day = ? and uzr.user_type_id = 1;`,
    
};

module.exports = UserQueries;
