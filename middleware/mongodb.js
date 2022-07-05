const mongoose = require("mongoose");
const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
const connectDb = handler => async (req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }
    await mongoose.connect(process.env.MONGO_URI,connectionParams)
    return handler(req,res);
}

mongoose.models = {}
export default connectDb;