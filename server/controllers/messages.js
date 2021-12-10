var models = require('../models');
var mysql2 = require('mysql2');
var express = require('express');
//var bluebird = require('bluebird');

var app = express();

var connection = require('../db/index.js');

module.exports = {
  get: function (req, res) {
    var output = [];
    connection.connection.query(
      'SELECT * FROM `messages` ',
      function(err, results, fields) {
        console.log('Results From Get: ', results);


        //res.end(JSON.stringify(results));
        res.json(results);
      }

    );
  }, // a function which handles a get request for all messages
  post: function (req, res) {

    var parameter = req.body;
    var params = [parameter.message, parameter.username, parameter.roomname];
    var usrParams = [parameter.username];
    var usrQuery = 'INSERT INTO users (name) VALUES (?)';
    connection.connection.query(usrQuery, usrParams, () => {}); // a function which handles posting a message to the database

    var nameQuery = `SELECT id FROM users WHERE name = ${parameter.username}`;
    var sqlQuery = 'INSERT INTO messages (text, userId, roomname) VALUES (?, (SELECT id FROM users WHERE name = ?), ?) ';
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
