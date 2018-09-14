var express = require("express");
var router = express.Router();
var mysql = require("promise-mysql");
var Promise = require("bluebird");
const response = require('../response');

const GET_USER =
  "CALL `get_user`(?)";

const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DATABASE
  },
};

router.get("/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  mysql
    .createConnection(config.db)
    .then(function(conn) {
      var result = conn.query(GET_USER,[req.query.email_address]); 
      conn.end();      
      return result;
    })
    .then(function(rows) {
        if (rows && rows[0]) {
          return res.send(response.getResponse(true, rows[0]))
        }
      })
    .catch(error => {
      console.log(error);
      return res.send(response.getResponse(false, error.message));
    });
});

module.exports = router;
