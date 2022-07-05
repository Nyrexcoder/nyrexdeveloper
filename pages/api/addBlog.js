import Blogs from "../../modals/blog";

import connectDb from "../../middleware/mongodb";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body)
      let newBlog = new Blogs(req.body)
      await newBlog.save();
    
    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);

