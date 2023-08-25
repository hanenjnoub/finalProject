const express=require("express")
const router=express.Router()
const medcontact=require("../model/medcontact")
const bcrypt=require("bcrypt")
const isAuth=require("../Middleweare/isAuth")
var jwt = require('jsonwebtoken')


router.get('/',async (req,res)=>{
    const contacts= await medcontact.find()
    res.send({msg:"data fetched",contacts})
    })
//add
router.post("/add",async(req,res)=>{
    const{name,lastName,phone,email,password,isDoctor,adresse,specialite,descreption,image}=req.body
    
        const newmedcontacts= new medcontact ({name,lastName,phone,email,password,isDoctor,adresse,specialite,descreption,image})
        const medcontacts=await newmedcontacts.save()
        res.send({msg:"success add",medcontacts})
       
})
//delete
    router.delete('/delete/:id',async(req,res)=>{
        const {id}=req.params
        const contact= await medcontact.findOneAndDelete({_id:id})
    
        res.send({msg:"contact deleted",medcontact})
     })
     //bookDate
     router.put('/bookingDate/:id',async(req,res)=>{
        const {date}=req.body
        const{id}=req.params
        const newBooking=await medcontact.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
        res.send({msg:"booking passed with success",newBooking})
    })
   
     // edit
     
    router.put('/edit/:id',async(req,res)=>{
        const{id}=req.params
        const contact=await medcontact.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
        res.send({msg:'contact edited',contact})
    })
     //register 
router.post("/register",async(req,res)=>{
    const{name,lastName,phone,email,password,isDoctor,adresse,specialite,descreption}=req.body
    let user=await medcontact.findOne({email})
    if(user){
       return res.send({msg:"user already exists !"})
    }
user=new medcontact({
    name,lastName,phone,email,password,isDoctor,adresse,specialite,descreption
})
const salt=10
let hashedPassword= await bcrypt.hash(password,salt)
user.password=hashedPassword
 await user.save()
 const payload={
   id:user._id
  }

 var token = jwt.sign(payload, 'oieyf');

 res.send({msg:"user added with success !",user,token})

})
//login
router.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
    let user=await medcontact.findOne({email})
    
    if(!user){
     return    res.send({msg:"user not found !"})
    }
    let isMatch= await bcrypt.compare(password,user.password)

if(!isMatch){
   return  res.send({msg:"Bad credentials !  password"})
}
 const payload={
    id:user._id,
    
 }

 var token = jwt.sign(payload, 'oieyf');
 res.send({msg:"user logged with success !",user,token})

    }
    catch(error){
        res.send({msg:"Server error"})
    }

})
//get authentified user 
//access Private
router.get("/user",isAuth,(req,res)=>{
    res.send({user:req.user})
})

router.get("/detailD/:id",async(req,res)=>{
let{id}=req.params
const doctor=await medcontact.findById({_id:id})
res.send({msg:"doctor fetched",doctor})
})
  // sendemail
  router.post('/send-email/:id', async (req, res) => {
  
    const { subject, text } = req.body;
  
    // Recherche de l'utilisateur dans la liste des utilisateurs
    let user=await medcontact.findOne({email})
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur introuvable' });
    }
  
    const mailOptions = {
      from: 'votre_adresse_email@gmail.com',
      to: user.email, // Utilisez l'adresse e-mail de l'utilisateur destinataire du modèle
      subject,
      text,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.json({ success: true });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
  });
  
  

    module.exports=router