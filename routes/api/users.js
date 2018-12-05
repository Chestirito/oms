var db = require("../../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/Users", function(req, res) {
    db.User.findAll({
      attributes: ['firstName', 'lastName']
    }).then(function(results) {
      res.json(results);
    });
  });
  
};

