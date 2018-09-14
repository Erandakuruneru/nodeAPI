var express = require("express");
var router = express.Router();

const cities = [
  {
    name : "Kaduwela",
    code : "KD",
  },
  {
    name : "Rajagiriya",
    code : "RJ",
  },
  {
    name : "Colombo",
    code : "CB"
  }
];

router.get("/", function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   return res.send(cities);
       
});

module.exports = router;
