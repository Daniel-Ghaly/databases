var models = require('../models');
var connection = require('../db/index.js');

module.exports = {
  get: function (req, res) {
    connection.connection.query(
      'SELECT * FROM `users` ',
      function(err, results, fields) {
        console.log('Results From Get: ', results);


        //res.end(JSON.stringify(results));
        res.json(results);
      }

    );
  },
  post: function (req, res) {

    var parameter = req.body;
    var params = [parameter.name];
    var sqlQuery = 'INSERT INTO users (name) VALUES (?) ';
    connection.connection.query(sqlQuery, params, function(err, results, fields) {
      if (err) {
        throw err;
      }


      // EXPRESS version:



      // covnert {text, roomname, etc} to INSERT sql data

      // data = stringified object here so need to parse
      // var messsage = JSON.parse(data);
      // can now access each sql field of each message
      // message.text message.roomname

      // INSERT using message object above and sqlQuery argument


      //console.log('new results: ', results);
      res.end();
    // });
    }); // a function which handles posting a message to the database
  }
};
