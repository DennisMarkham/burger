var connection = require("../config/connection.js");

var orm = {
selectAll: function(table, cb) {
    var queryString = "SELECT * FROM table";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
}


insertOne: function(table, newBurgerName, cb) {
	var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES (" + newBurgerName + ", true)";
	connection.query(queryString, function(err, result) {
		if(err) throw err;
		cb(result);
	});
}

updateOne: function(table, devouredBurger, cb){
	var queryString = "UPDATE " + table + " SET " + devouredBurger + " = true";
	connection.query(queryString, function(err, result){
		if (err) throw err;
		cb(result);
	})
}
}
module.exports = orm;