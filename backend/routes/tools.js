const express = require("express");
const router = express.Router();
const Tools = require("../models/Tools");

// {Create Operation} ADMIN
router.post("/create/:id", async (req, res) => {
  let success = false;
  try {
    //store data
    const { toolTitle, toolDescription, toolPhoto } = req.body; // de-Structure
    let tools = await Tools.create({
      serviceId: req.params.id,
      toolTitle: toolTitle,
      toolDescription: toolDescription,
      toolPhoto: toolPhoto,
    });
    success = true;
    res.send({ success, tools });
  } catch (error) {
    res.status(500).json({ success, error: error.message });
  }
});

// {Read/Fetch Operation} USER
router.get("/read", async (req, res) => {
  const tools = await Tools.find({}); // fetch all data
  res.json(tools);
});

// {Update Operation} ADMIN
router.put("/update/:id", async (req, res) => {
  let success = false;
  try {
    const { toolTitle, toolDescription, toolPhoto } = req.body; //De-Structure
    // Create a new data object
    const newData = {};
    if (toolTitle) {
      newData.toolTitle = toolTitle;
    }
    if (toolDescription) {
      newData.toolDescription = toolDescription;
    }
    if (toolPhoto) {
      newData.toolPhoto = toolPhoto;
    }

    //Find the document to be updated and update it
    let tools = await Tools.findById(req.params.id);
    if (!tools) {
      res.status(404).send("Document not found");
    } else {
      tools = await Tools.findByIdAndUpdate(
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
    let tools = await Tools.findById(req.params.id);
    if (!tools) {
      res.status(404).send("Document not found");
    } else {
      tools = await Tools.findByIdAndDelete(req.params.id);
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
