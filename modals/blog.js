const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    heading:{type: String,required:true},
    metadesc:{type: String,required:true},
    slug:{type: String,required:true},
    tags:{type: String,required:true},
    content:{type: String,required:true},
}, {timestamps:true});

mongoose.models = {}
// export default mongoose.models.Blogs || mongoose.model("Blogs",BlogSchema);
export default mongoose.model("Blogs", BlogSchema);