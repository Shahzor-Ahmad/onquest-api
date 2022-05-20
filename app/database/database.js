const connection = require('./db');

const Database = {
    asyncQuery: function query(query, args) {
        return new Promise((resolve, reject) => {
            connection.query(query, args, function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
};

module.exports = Database;