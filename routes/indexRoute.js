const express = require("express");
const controller = require('../controllers/productregistercontroller');
const router = express.Router();

router.post("/postmobilephonedetails",controller.postMobilePhoneDetails);
router.post("/postcarproductdetails",controller.postcardetails);
router.post("/postmotorcycledetails",controller.postmotorcycledetails);
router.get("/getallcars",controller.getAllCars);
router.get("/getmotorcycledetails",controller.getmotorcycledetails);
router.get("/getmobilephonedetails",controller.getMobilePhoneDetails);


module.exports = router;