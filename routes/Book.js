const express = require('express');
const router = express.Router();
const Booking = require("../model/bookingDate");
const isAuth=require("../Middleweare/isAuth")


router.post('/addbookDate',async(req,res)=>{
    const {date,time,user }=req.body
  
const newBooking=new Booking({date,time,user :  user._id})
await newBooking.save()
res.send({msg:"booking passed with success",newBooking})
})
//auth
// router.get("/user",isAuth,(req,res)=>{
//     res.send({user:req.user})
// })
module.exports=router