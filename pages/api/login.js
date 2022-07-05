import Signup from "../../modals/signup";
import connectDb from "../../middleware/mongodb";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");


const handler = async (req, res) => {
    
  if (req.method == "POST") {
    let user = await Signup.findOne({"email": req.body.email})
    const bytes  = CryptoJS.AES.decrypt(user.password, "secretkey123");
    let decryptPass = bytes.toString(CryptoJS.enc.Utf8)
    if(user){
        if(req.body.email == user.email && req.body.password == decryptPass){
          var token = jwt.sign({email:user.email, name:user.name }, "jwtsecret",{
            expiresIn:"1d"
          });
            res.status(200).json({success:true,token});
            console.log(token)
        }else{
            res.status(200).json({ success:false,error: "Invalid Credentials" });
        }
    
  }else{
    res.status(200).json({ success:false,error: "No user found" });
  }
}else{
    res.status(400).json({ success:false,error: "This method is not allowed" });
}
}
export default connectDb(handler);


