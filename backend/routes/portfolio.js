const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio");

// {Create Operation} ADMIN
router.post("/create", async (req, res) => {
  let success = false;
  try {
    //store data
    const { title, description, photo } = req.body; // de-Structure
    let portfolio = await Portfolio.create({
      title: title,
      description: description,
      photo: photo,
    });
    success = true;
    res.send({ success, portfolio });
  } catch (error) {
    res.status(500).json({ success, error: error.message });
  }
});

// {Read/Fetch Operation} Add route/end USER
router.get("/read", async (req, res) => {
  const portfolio = await Portfolio.find({}); // fetch all data
  res.json(portfolio);
});

// {Update Operation} Add route/end ADMIN
router.put("/update/:id", async (req, res) => {
  let success = false;
  try {
    const { title, description, photo } = req.body; //De-Structure
    // Create a new data object
    const newData = {};
    if (title) {
      newData.title = title;
    }
    if (description) {
      newData.description = description;
    }
    if (photo) {
      newData.photo = photo;
    }

    //Find the document to be updated and update it
    let portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      res.status(404).send("Document not found");
    } else {
      portfolio = await Portfolio.findByIdAndUpdate(
        req.params.id,
        { $set: newData },
        { new: true }
      );
      success = true;
      res.send({
        success,
        message: "Document has been updated at Document id : " + req.params.id,
      });
    }
  } catch (error) {
    res.status(500).json({ success, error: error.message });
  }
});

// {Delete Operation} Add route/end point ADMIN
router.delete("/delete/:id", async (req, res) => {
  let success = false;
  try {
    //Find the Document to be deleted and delete it
    let portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      res.status(404).send("Document not found");
    } else {
      services = await Portfolio.findByIdAndDelete(req.params.id);
      success = true;
      res.send({
        success,
        message: "Document at id : " + req.params.id + " Has been deleted",
      });
    }
  } catch (error) {
    res.status(500).json({ success, error: error.message });
  }
});

module.exports = router;
