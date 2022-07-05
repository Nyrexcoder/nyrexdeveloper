import React, { useState } from 'react'
import Link from 'next/link'
// import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'

const Navbar = ({user , Logout }) => {
  let [open,setOpen]=useState(false);

  return (
    <>
    <Script type='module' src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'>
    </Script>
    <Script type='module' src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'></Script>
    
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <Link href={'/'}><div className='title-font font-medium text-2xl cursor-pointer flex items-center'>
            <span className='mr-1 pt-0.8'><Image src='/log.png' height={50} width={50} /></span>
            <span className="ml-1 text-xl">nyrexDeveloper</span>
          </div></Link>
          <div onClick={()=>setOpen(!open)}
           className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
           bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 md:pr-0 pl-9 pr-9
           transition-all divide-purple-500 ease-in
           ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 text-center`}>
          
                 
                  <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link href={'/'}><a className='text-gray-800 hover:text-gray-500 duration-500'>Home</a></Link>
                 </li>

                  <li className='md:ml-8 text-xl md:my-0 my-7'>
                  <Link href={'about'}><a className='text-gray-800 hover:text-gray-500 duration-500'>About</a></Link>
                 </li>

                 <li className='md:ml-8 text-xl md:my-0 my-7'>
                  <Link href={'services'}><a className='text-gray-800 hover:text-gray-500 duration-500'>Services</a></Link>
                 </li>

                 <li className='md:ml-8 text-xl md:my-0 my-7'>
                  <Link href={'blog'}><a className='text-gray-800 hover:text-gray-500 duration-500'>Blog</a></Link>
                 </li>

                 <li className='md:ml-8 text-xl md:my-0 my-7'>
                  <Link href={'contact'}><a className='text-gray-800 hover:text-gray-500 duration-500'>Contact</a></Link>
                 </li>

                 {!user.value && <Link href={'login'}><button className="mr-2 md:mr-0 md:ml-8 md:my-0 my-7 inline-flex items-center bg-gray-300 border-0 py-2 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">Login</button></Link>}
                 {!user.value && <Link href={'signup'}><button className="md:ml-5 md:my-0 my-7 inline-flex items-center bg-gray-900 text-white border-0 py-2 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">Signup</button></Link>}
                 {user.value && <button onClick={Logout} className="mr-2 md:mr-0 md:ml-8 md:my-0 my-7 inline-flex items-center bg-red-600 text-white border-0 py-2 px-3 focus:outline-none hover:bg-red-800 rounded text-base mt-4 md:mt-0">Logout</button>}

          </ul>

        </div>
    </div>

</>
  )
}


export default Navbar
