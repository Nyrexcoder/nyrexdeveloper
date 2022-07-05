import Contact from "../../modals/contact";

import connectDb from "../../middleware/mongodb";

const handler = async (req,res) => {
    let contacts = await Contact.find()
    res.status(200).json({contacts})
}

export default connectDb(handler);
