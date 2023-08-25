const jwt=require("jsonwebtoken")
const User=require("../model/medcontact")
const isAuth=async(req,res,next)=>{
    try{
const token=req.headers["authorization"]
if(!token){
    return res.send({msg:"No token !"})
}
const decoded= await jwt.verify(token,"oieyf")
console.log(decoded,"testtt")

const user= await User.findById(decoded.id)
console.log(user,"userrrr")
if(!user){
    return res.send({msg:"no user with this token !"})
}
req.user=user
next()
    }
    catch(error){
        res.send(error)
    }
}

module.exports=isAuth