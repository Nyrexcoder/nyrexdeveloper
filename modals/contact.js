const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    message:{type: String, required: true},
}, {timestamps:true});

// mongoose.models = {}
export default mongoose.models.Contact || mongoose.model("Contact",ContactSchema);
// export default mongoose.model("Contact", ContactSchema);