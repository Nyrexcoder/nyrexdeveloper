import React from "react"
import mongoose from "mongoose";
import Blogs from "../../modals/blog"

const slug = ({blog}) => {

    // const router = useRouter();
    // const {slug} = router.query;
    const body = blog.content;
  return (
    <div className=" mt-20 w-full">
      <div className="md:w-7/12 md:mx-auto p-5 w-full">

      <h1 className="text-2xl lg:text-3xl font-semibold">{blog.heading}</h1>
      <div className="mx-auto text-justify mt-2" dangerouslySetInnerHTML={{ __html:body}} />

      </div>
    </div>
  )
}

export default slug


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let blog = await Blogs.findOne({slug:context.query.slug});
  return {
    props:{blog: JSON.parse(JSON.stringify(blog))}, // will be passed to the page component as props
  };
}
