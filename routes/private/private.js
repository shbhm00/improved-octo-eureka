const express = require("express");
const router = express.Router();
const usersModel = require("../../models/users");
router.get("/users", (req, res) => {
  res.send(usersModel);
});
module.exports = router;
