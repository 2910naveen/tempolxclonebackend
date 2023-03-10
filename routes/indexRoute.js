const express = require("express");
const controller = require('../controllers/productregistercontroller');
const router = express.Router();

router.post("/postmobilephonedetails",controller.postMobilePhoneDetails);
router.post("/postcarproductdetails",controller.postcardetails);
router.post("/postmotorcycledetails",controller.postmotorcycledetails);
router.get("/getallcars",controller.getAllCars);
router.get("/getmotorcycledetails",controller.getmotorcycledetails);
router.get("/getmobilephonedetails",controller.getMobilePhoneDetails);
router.post("/postuserregisterdetails",controller.postUserRegisterDetails);
router.put("/updatestatusofuser",controller.updateStatusOfUser);
router.get("/findregistereduserbyemail/:email",controller.getRegisteredUserByEmail);
router.post("/sendotpmailtoregistereduser",controller.sendOTPMailToRegisteredUser);
router.post("/sendinterestedmailtoseller",controller.sendInterestedMailToSeller);


module.exports = router;