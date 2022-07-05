import Blogs from "../../modals/blog" 
import connectDb from "../../middleware/mongodb";


const handler = async (req,res) => {
    let blog = await Blogs.find()
    res.status(200).json({blog})
}

export default connectDb(handler);
