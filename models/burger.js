var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(newBurgerName, cb) {
    orm.insertOne("burgers", newBurgerName, function(res) {
      cb(res);
    });
  },
  updateOne: function(devouredBurger, cb) {
    orm.updateOne("burgers", devouredBurger, function(res) {
      cb(res);
    });
  },
  
};

module.exports = burger;
