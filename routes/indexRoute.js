const express = require("express");
const controller = require('../controllers/productregistercontroller');
const router = express.Router();

router.post("/postcarproductdetails",controller.postcardetails);
router.get("/getallcars",controller.getAllCars);

module.exports = router;