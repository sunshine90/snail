var express = require('express');
var router = express.Router();
// import log.js
var log = require("./log");

// import nest.js
var nest = require("./nest");

// import profile.js
var profile = require("./profile");

// import profile.js
var friends = require("./friends");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// log.js
router.post("/log/login", log.login);
router.get("/log/logup", log.logup);
router.get("/log/logout", log.logout);
router.get("/log/search", log.search);


// nest.js
router.get("/nest/setup", nest.setup);
router.get("/nest/join", nest.join);
router.get("/nest/del", nest.del);
router.get("/nest/chat", nest.chat);
router.get("/nest/publish", nest.publish);

// profile.js
router.get("/profile/selfinfo", profile.selfinfo);
router.get("/profile/save", profile.save);

// friends.js
router.get("/friends/add", friends.add);
router.get("/friends/del", friends.del);
router.get("/friends/chat", friends.chat);



module.exports = router;
