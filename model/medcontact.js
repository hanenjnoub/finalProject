const mongoose =require('mongoose')
const schema=mongoose.Schema

const medcontactSchema= new schema({
    name:{
        type:String,
    },
    lastName:{
        type:String
    },  
    phone:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    isDoctor:{
        type:Boolean,
        default:false
    },
    adresse:{
        type:String
    },
    specialite:{
        type:String
    },
    descreption:{
        type:String
    },
    image:{
        type:String,
        default:"hhs"
    },
    date:{
        type:Date,
        required:true
      },
     
    dateCreation:{
        type:Date,
        default:Date.now()
    }
})
module.exports=medcontact=mongoose.model('medcontact',medcontactSchema)