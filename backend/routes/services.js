const express = require("express");
const router = express.Router();
const Services = require("../models/Services");

// {Create Operation} ADMIN
router.post("/create", async (req, res) => {
  let success = false;
  try {
    //store data
    const { title, description, photo, price } = req.body; // de-Structure
    let services = await Services.create({
      title: title,
      description: description,
      photo: photo,
      price: price,
    });
    success = true;
    res.send({ success, services });
  } catch (error) {
    res.status(500).json({ success, error: error.message });
  }
});

// {Read/Fetch Operation} USER
router.get("/read", async (req, res) => {
  const services = await Services.find({}); // fetch all data
  res.json(services);
});


// {Update Operation} ADMIN
router.put("/update/:id", async (req, res) => {
  let success = false;
  try {
    const { title, description, photo, price } = req.body; //De-Structure

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
    if (price) {
      newData.price = price;
    }
    console.log(newData.photo)
    //Find the document to be updated and update it
    let services = await Services.findById(req.params.id);
    if (!services) {
      res.status(404).send("Document not found");
    } else {
      services = await Services.findByIdAndUpdate(
        req.params.id,
        { $set: newData },
        { new: true }
      );
      success = true;
      res.send({
        success,
        message: "Document has been pdated at Document id : " + req.params.id,
      });
    }
  } catch (error) {
    res.status(500).json({ success, error: error.message });
  }
});

// {Delete Operation} ADMIN
router.delete("/delete/:id", async (req, res) => {
  let success = false;
  try {
    //Find the Document to be deleted and delete it
    let services = await Services.findById(req.params.id);
    if (!services) {
      res.status(404).send("Document not found");
    } else {
      services = await Services.findByIdAndDelete(req.params.id);
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
