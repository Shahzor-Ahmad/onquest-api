const UserQueries = {
    GET_VENDOR_BY_ID:
        `SELECT * FROM vendors WHERE vendors.vendor_id = ?;`,
    GET_ALL_VENDORS:
        `SELECT * FROM vendors;`,
    CREATE_VENDOR:
        `INSERT INTO vendors SET ?;`,
    DELETE_VENDOR:
        `DELETE FROM vendors WHERE vendors.vendor_id = ?;`,
    UPDATE_VENDOR:
        `UPDATE vendors SET ? WHERE vendors.vendor_id = ?;`,
    ASSIGN_VENDOR:
        `INSERT INTO vendor_building SET ?;`,
    GET_VENDOR_BY_ID_WITH_LCOATION:
        `SELECT * FROM vendors INNER JOIN vendor_building ON vendors.vendor_id = vendor_building.vendor_id WHERE vendors.vendor_id = ?;`,
};

module.exports = UserQueries;
