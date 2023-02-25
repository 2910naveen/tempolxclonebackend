var db = require('../models');
const postCarModel = db.postCarModel;
const motorCycleModel = db.motorCycleModel;
const mobilePhoneModel = db.mobilePhoneModel;

const postcardetails = async (req,res)=>{
   console.log(req.body);
   try{
      let data = await postCarModel.build({
        brand:req.body.brand,
        year:req.body.year,
        fuel:req.body.fuel,
        transmission:req.body.transmission,
        kmdriven:req.body.kmdriven,
        noofowners:req.body.noofowners,
        setaprice:req.body.setaprice,
        adtitle:req.body.adtitle,
        description:req.body.description,
        uploadphoto:req.body.uploadphoto,
        state:req.body.state,
        city:req.body.city,
        neighbourhood:req.body.neighbourhood,
        username:req.body.username,
        mobilenumber:req.body.mobilenumber
      });
      await data.save();
      res.send("successfully posted");
   }
   catch(er)
   {
      console.log(er);
      res.send(er);
   }
};

const getAllCars = async (req,res) =>{
    try{
       console.log("inside get all data");
       const data = await postCarModel.findAll();
       res.json({data});
    }
    catch(er)
    {
        res.send(er);
    }
};

const postmotorcycledetails = async (req,res)=>{
   try{
      let data = await motorCycleModel.build({
         brand:req.body.brand,
         year:req.body.year,
         kmdriven:req.body.kmdriven,
         setaprice:req.body.setaprice,
         adtitle:req.body.adtitle,
         description:req.body.description,
         uploadphoto:req.body.uploadphoto,
         state:req.body.state,
         city:req.body.city,
         neighbourhood:req.body.neighbourhood,
         username:req.body.username,
         mobilenumber:req.body.mobilenumber
       });
       await data.save();
       res.send("successfully posted");
   }catch(er)
   {
       res.send(er);
   }
}

const getmotorcycledetails = async (req,res)=>{
   try{
       const data = await motorCycleModel.findAll();
       console.log(data);
       res.json({data});
   }
   catch(err)
   {
      res.send(err);
   }
}

const postMobilePhoneDetails = async (req,res)=>{
   console.log(req.body);
    try{
         const data = await mobilePhoneModel.build({
            brand:req.body.brand,
            setaprice:req.body.setaprice,
            adtitle:req.body.adtitle,
            description:req.body.description,
            uploadphoto:req.body.uploadphoto,
            state:req.body.state,
            city:req.body.city,
            neighbourhood:req.body.neighbourhood,
            username:req.body.username,
            mobilenumber:req.body.mobilenumber
         })
         await data.save();
         res.send("successfully mobilephone details posted");
    }
    catch(err)
    {
      res.send(err);
    }
}

const getMobilePhoneDetails = async (req,res) =>{
     try
     {
          const data = await mobilePhoneModel.findAll();
          res.json({data});
     }
     catch(err)
     {
          res.send(err);
     }
}

module.exports = {postcardetails,getAllCars,postmotorcycledetails,getmotorcycledetails,postMobilePhoneDetails,getMobilePhoneDetails};