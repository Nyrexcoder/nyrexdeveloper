import React, { useState,useRef } from "react";

import { Editor } from '@tinymce/tinymce-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const admin_blog = () => {
  const editorRef = useRef();
  const[content, SetBody] = useState("");
  const [heading, setTitle] = useState();
  const [metadesc, setMeta] = useState();
  const [slug, setSlug] = useState();
  const [tags, setTag] = useState();


  const handleChange = (e) => {
   
    if (e.target.name == "heading") {
      setTitle(e.target.value);
    } else if (e.target.name == "metadesc") {
      setMeta(e.target.value);
    }else if (e.target.name == "slug") {
      setSlug(e.target.value);
    }else if (e.target.name == "tags") {
      setTag(e.target.value);
    }else if (e.target.name == "content") {
      setContent(e.target.value);
    }


    
  };

    
  const handleSubmit = async (e) => {
    e.preventDefault();

  //  const content = editorRef.current.getContent();
   const data = {heading,metadesc,slug,tags,content};

   let res = await fetch("http://localhost:3000/api/addBlog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let response = await res.json();

  if(response.success){
    setTitle("");
    setMeta("");
    setSlug("");
    setTag("");
    editorRef.current.setContent("");


    toast.success('New blog posted.', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }else{
    toast.error(response.error, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }


  
   
  };

  return (
    <div>
        <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Create New Blog
            </h1>
          </div>
          <form onSubmit={handleSubmit} method="POST">
            <div>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Title
                    </label>
                    <input
                     value={heading}
                     onChange={handleChange}
                      type="text"
                      id="heading"
                      name="heading"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              

                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="text" class="leading-7 text-sm text-gray-600">
                     Meta Desc.
                    </label>
                    <input
                      value={metadesc}
                      onChange={handleChange}
                      type="text"
                      id="metadesc"
                      name="metadesc"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>


                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="text" class="leading-7 text-sm text-gray-600">
                     Slug
                    </label>
                    <input
                      value={slug}
                      onChange={handleChange}
                      type="text"
                      id="slug"
                      name="slug"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>


                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="text" class="leading-7 text-sm text-gray-600">
                      Tags
                    </label>
                    <input
                      value={tags}
                      onChange={handleChange}
                      type="text"
                      id="tags"
                      name="tags"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>


                <Editor
                      textareaName='content'
                      init={{
                          height: 500,
                          width:15000,
                          menubar: false,
                          plugins: [
                              'advlist autolink lists link image charmap print preview anchor',
                              'searchreplace visualblocks code fullscreen',
                              'insertdatetime media table paste code help wordcount'
                          ],
                          toolbar: 'undo redo | formatselect | ' +
                          'bold italic backcolor | alignleft aligncenter ' +
                          'alignright alignjustify | bullist numlist outdent indent | ' +
                          'removeformat | help',
                          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                      }}
                      onEditorChange={(newText) => SetBody(newText)}
                      onInit={(evt,editor) => editorRef.current = editor }
                  />
               
             

                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default admin_blog;
