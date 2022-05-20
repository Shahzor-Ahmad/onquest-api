const UserQueries = {

    // Pet profile queries
    GET_PROFILE_BY_USER_ID:
        `SELECT * FROM pet_profile WHERE pet_profile.user_id = ?;`,
    GET_PROFILE_BY_ID:
        `SELECT * FROM pet_profile WHERE pet_profile.id = ?;`,
    CREATE_PET_PROFILE:
        `INSERT INTO pet_profile SET ?;`,
    UPDATE_PET_PROFILE:
        `UPDATE pet_profile SET ? WHERE pet_profile.id = ?`,
    
    // House keeping profile queries
    GET_HOUSE_KEEPING_PROFILE_BY_USER_ID:
        `SELECT * FROM house_keeping WHERE house_keeping.user_id = ?;`,
    GET_HOUSE_KEEPING_PROFILE_BY_ID:
        `SELECT * FROM house_keeping WHERE house_keeping.id = ?;`,
    CREATE_HOUSE_KEEPING_PROFILE:
        `INSERT INTO house_keeping SET ?;`,
    UPDATE_HOUSE_KEEPING_PROFILE:
        `UPDATE house_keeping SET ? WHERE house_keeping.user_id = ?`,

    // Grocery profile queries
    GET_GROCERY_PROFILE_BY_USER_ID:
        `SELECT * FROM grocery_shopping WHERE grocery_shopping.user_id = ?;`,
    GET_GROCERY_PROFILE_BY_ID:
        `SELECT * FROM grocery_shopping WHERE grocery_shopping.id = ?;`,
    CREATE_GROCERY_PROFILE:
        `INSERT INTO grocery_shopping SET ?;`,
    UPDATE_GROCERY_PROFILE:
        `UPDATE grocery_shopping SET ? WHERE grocery_shopping.user_id = ?`,

    // Rx pickup profile queries
    GET_RX_PCIKUP_PROFILE_BY_USER_ID:
        `SELECT * FROM rx_pickup WHERE rx_pickup.user_id = ?;`,
    GET_RX_PCIKUP_PROFILE_BY_ID:
        `SELECT * FROM rx_pickup WHERE rx_pickup.id = ?;`,
    CREATE_RX_PCIKUP_PROFILE:
        `INSERT INTO rx_pickup SET ?;`,
    UPDATE_RX_PCIKUP_PROFILE:
        `UPDATE rx_pickup SET ? WHERE rx_pickup.user_id = ?`,
    PAYMENT_PROFILE_INSERT: 'INSERT INTO `payment_profile` SET ?',
    PAYMENT_PROFILE_UPDATE: 'UPDATE `payment_profile` SET ? WHERE user_id=?',
    DELETE_PAYMENT_PROFILE: 'DELETE FROM `payment_profile` WHERE user_id=?',
    SELECT_PAYMENT_PROFILE: 'SELECT * FROM `payment_profile` WHERE user_id=?'
};

module.exports = UserQueries;
