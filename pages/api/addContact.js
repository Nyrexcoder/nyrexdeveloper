import Contact from "../../modals/contact";

import connectDb from "../../middleware/mongodb";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body)
      let contactData = new Contact(req.body)
      await contactData.save();
    
    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
