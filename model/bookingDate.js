const { time } = require("console")
const mongoose=require("mongoose")
const schema=mongoose.Schema

const bookingSchema=new schema({
  user: {
    type:mongoose.Schema.Types.ObjectId,ref:'User',required:true
  },
    date:{
    type:String,
    required:true
  },
  time:{
    type:String,
    required:true

  },
 

   
})

module.exports=booking=mongoose.model("booking",bookingSchema)