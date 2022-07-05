import mongoose from "mongoose";
import Link from "next/link";
import React, { useState } from "react";
import Blogs from "../modals/blog";


const blog = ({allblogs}) => {
  const [blogs, setBlogs] = useState(allblogs);

const filterBlogs = e => {
      const search = e.target.value.toLowerCase()
      const filteredBlogs = allblogs.filter(heads => heads.heading.toLowerCase().includes(search))
      setBlogs(filteredBlogs)
}

  return (
    <>
      <div className=" md:mt-20 mt-20 bg-gray-200">

        <div className=" w-full md:p-3 sm:p-2">
          <div className=" mx-auto sm:justify-center text-center sm:w-1/4 md:mt-5">
            <input
              onChange={(e)=>{filterBlogs(e)}}
              type="text"
              className="rounded mt-5 p-2.5 mr-1 md:w-72"
              placeholder="search..."
            />
          </div>
        </div>

        {blogs.map((blogs)=>{
        return <div key={blogs._id} className=" p-3">
          <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <span className="font-light text-gray-600">{blogs.createdAt}</span>
            </div>
            <div className="mt-2">
             
              <span className="text-2xl font-bold text-gray-700 cursor-pointer">
                <Link href={`blogpost/${blogs.slug}`}>
                  {blogs.heading}
                </Link>
              </span>
              <p className="mt-2 text-gray-600">
                {blogs.metadesc}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 text-purple-900">
              <Link href={`blogpost/${blogs.slug}`}>Read more</Link>
            </div>
          </div>
        </div>
         })}
      </div>
    </>
  );
};

export default blog;

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let allblogs = await Blogs.find().sort({_id:-1});
  return {
    props:{allblogs: JSON.parse(JSON.stringify(allblogs)) }, // will be passed to the page component as props
  };
}
