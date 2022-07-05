import Signup from "../../modals/signup";

import connectDb from "../../middleware/mongodb";
const CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await Signup.findOne({"email": req.body.email})
    if(user){
        if(req.body.email == user.email){
            res.status(400).json({ error: "Email is already exiest" });
    }
    
  } else {
    const {name,email}=req.body
    let signupData = new Signup({name, email, password: CryptoJS.AES.encrypt(req.body.password, "secretkey123").toString()})
    await signupData.save();
  
    res.status(200).json({ success: "User registerd" });
  }
}else{
    res.status(400).json({ error: "This method is not allowed" });
}
}
export default connectDb(handler);


