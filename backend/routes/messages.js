const express = require("express");
const router = express.Router();
const Messages = require("../models/Messages");

// {Create Operation} USER
router.post("/create", async (req, res) => {
  let success = false;
  try {
    //store data
    const { fname, lname, mobile, service, msg } = req.body; // de-Structure
    let messages = await Messages.create({
      fname: fname,
      lname: lname,
      mobile: mobile,
      service: service,
      msg: msg,
    });
    success = true;
    res.send({ success, messages });
  } catch (error) {
    res.status(500).json({ success, error: error.message });
  }
});

// {Read/Fetch Operation} ADMIN
router.get("/read", async (req, res) => {
  const portfolio = await Messages.find({}); // fetch all data
  res.json(portfolio);
});

module.exports = router;
