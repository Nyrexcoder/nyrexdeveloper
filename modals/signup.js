const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
}, {timestamps:true});

// mongoose.models = {}
export default mongoose.models.Signup || mongoose.model("Signup",SignupSchema);
// export default mongoose.model("Contact", ContactSchema);