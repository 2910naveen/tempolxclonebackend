var db = require('../models');
const postCarModel = db.postCarModel;
const motorCycleModel = db.motorCycleModel;
const mobilePhoneModel = db.mobilePhoneModel;
const userModel = db.userModel;
const nodemailer = require("nodemailer");

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
        mobilenumber:req.body.mobilenumber,
        email:req.body.email
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
         mobilenumber:req.body.mobilenumber,
         email:req.body.email
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
            mobilenumber:req.body.mobilenumber,
            email:req.body.email
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
};

const postUserRegisterDetails = async (req,res) =>{
   console.log(req.body);
    try
    {
       const data = await userModel.build({
           email:req.body.email,
           status:"NotVerified"
       });
       await data.save();
       sendEmail(req);
       res.send("successfully saved the user");
    }
    catch(err)
    {
       res.send(err);
    }
} 

//function to send the email
const sendEmail = (req,res) => {
   
   //create reusable transporter object using the default SMTP transport
   let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
         user:'naveen.segu2910@gmail.com',
         pass:"rymupyegdefuyafa"
      }
   });

   //send email data with unicodesymbols
   const emailOptions = {
      from: '"naveen.segu2910@gmail.com',      //sender email address
      to:`${req.body.email}`,                                 //receiver email address
      subject:'IOLX Registration ONE-TIME-PASSWORD(OTP)',
      html:`<h3>Dear IOLX user</h3>
            <p>Thanks for registering in Incedo OnLine Exchange</p>
            <p>The OTP FOR LOGGING INTO IOLX APP IS ${req.body.otp}</p>
            <h3>Thanks & Regards</h3>
            <h3>Incedo OnLine Exchange Team</h3>`
   };

   //send mail with default transport object
   transporter.sendMail(emailOptions,(error,info)=>{
      if(error)
      {
         console.log(error);
         res.json({error});
      }
      console.log('Message Sent:%s',info.messageId);
      console.log('Preview URL:%s',nodemailer.getTestMessageUrl(info));
      res.json("OTP send successfully");
   });

};

const updateStatusOfUser = async (req,res) =>{
    try
    {
       await userModel.update({ status: 'verified' },{ where:{email: req.body.email}}).then((res)=>req.send(res)).catch((err)=>res.send(err));
    }
    catch(err)
    {
       res.send(err);
    }
};

const getRegisteredUserByEmail = async(req,res) => {
   console.log(req.params.email);
   try
   {
        const data = await userModel.findAll({
         where: {
            email:req.params.email,
            status: 'verified'
          }
        })
        res.json({data});
   }
   catch(error)
   {
         res.json({});
   }
   
}

const sendOTPMailToRegisteredUser = async(req,res)=>
{
      await sendEmail(req,res);
};


const sendInterestedMailToSeller = async (req,res)=>
{
   console.log(req.body);
   //create reusable transporter object using the default SMTP transport
   let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
         user:`naveen.segu2910@gmail.com`,
         pass:"rymupyegdefuyafa"
      }
   });

   //send email data with unicodesymbols
   const emailOptions = {
      from:'naveen.segu2910@gmail.com',      //sender email address
      to:`${req.body.product.email}`,                                 //receiver email address
      subject:'Interested In Your IOLX Product',
      html:`<h3>Dear ${req.body.product.username},</h3>
            <h4>Message From IOLX:The IOLX user ${req.body.userDetails.name} is interested in purchasing your product, ${req.body.product.adtitle} , that is listed for sale on IOLX platform.
            Also ${req.body.userDetails.name} is eager to know more about it.The following is his contact number:[${req.body.userDetails.phoneNumber}].</h4>
            <p><span style={font-size:20px,font-weight:bolder}>Name of Person:</span>${req.body.userDetails.name}</p>
            <p><span style={font-size:20px,font-weight:bolder}>Phone Number:</span>${req.body.userDetails.phoneNumber}</p>
            <p><span style={font-size:20px,font-weight:bolder}>Description:</span>${req.body.userDetails.description}</p>
            <h3>Thanks&Regards</h3>
            <h3>Incedo OnLine Exchange Team</h3>`
   };

   //send mail with default transport object
   transporter.sendMail(emailOptions,(error,info)=>{
      if(error)
      {
         console.log(error);
      }
      console.log('Message Sent:%s',info.messageId);
      console.log('Preview URL:%s',nodemailer.getTestMessageUrl(info));
   });

    res.json("successfully sent mail to Seller");
}
module.exports = {postcardetails,getAllCars,postmotorcycledetails,getmotorcycledetails,postMobilePhoneDetails,getMobilePhoneDetails,postUserRegisterDetails,updateStatusOfUser,getRegisteredUserByEmail,
                  sendOTPMailToRegisteredUser,sendInterestedMailToSeller};