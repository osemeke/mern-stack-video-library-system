var sqlite3 = require("sqlite3").verbose();
var connection = new sqlite3.Database("./local-sqlite.db");

const init = () => {
    // console.log('WORKING!')
    connection.serialize(function () {
        connection.run("CREATE TABLE IF NOT EXISTS Tags (id INTEGER PRIMARY KEY, name TEXT)");
        connection.run("INSERT INTO Tags (name) VALUES ('best')");
        connection.each("SELECT id, name FROM Tags", function (err, row) {
            console.log(row.id + ": " + row.name);
        });
    });
    
    connection.close();
}

module.exports = { init, connection }