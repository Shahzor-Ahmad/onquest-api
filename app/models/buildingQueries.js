const UserQueries = {
    GET_BUILDING_BY_ID:
        `SELECT * FROM building WHERE building.building_id = ?;`,
    GET_BUILDING_BY_CODE:
        `SELECT * FROM building WHERE building.property_code = ?;`,
    GET_ALL_BUILDINGS:
        `SELECT * FROM building;`,
    CREATE_BUILDING:
        `INSERT INTO building SET ?;`,
    DELETE_Building:
        `DELETE FROM building WHERE building.building_id = ?;`,
    UPDATE_BUILDING:
        `UPDATE building SET ? WHERE building.building_id = ?;`,
    GET_CAPTAINS_WITH_PROPERTY_CODE:
        `SELECT * FROM captain_building JOIN building ON captain_building.building_id = building.building_id JOIN user_profile ON captain_building.captain_id = user_profile.user_id;`,
    // GET_CAPTAINS_WITH_ID:
    //     `SELECT * FROM captain_building JOIN building ON captain_building.building_id = building.building_id WHERE captain_building.building_id = ?`

    // UPDATE SERVICE DATE
    UPDATE_SERVICE_DAYS:
        `UPDATE building SET service_day = ? WHERE building.building_id = ?`,

    };

module.exports = UserQueries;
