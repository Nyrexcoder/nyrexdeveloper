
import Link from 'next/link'
import React from 'react'
const About = () => {
  return (
    <>
   <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 md:p-20 w-5/6 mb-10 md:mb-0 justify-center">
      <img className="object-cover object-center rounded-full ml-auto" alt="hero" src="https://avatars.githubusercontent.com/u/88071981?v=4"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello i'm <font color="#3f83f8">neeraj</font> 
        
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center ">
        <Link href='https://github.com/Nyrexcoder' target="_blank"><span className='text-3xl hover:text-purple-800 mx-2 cursor-pointer'><ion-icon name="logo-github"></ion-icon></span></Link>
        <Link href='https://www.linkedin.com/in/neeraj-kumar-3490431b3/' target="_blank"><span className='text-3xl hover:text-blue-600 mx-2 cursor-pointer'><ion-icon name="logo-linkedin"></ion-icon></span></Link>
        {/* <Link href='https://github.com/Nyrexcoder' target="_blank"><span className='text-3xl hover:text-red-600 mx-2 cursor-pointer'><ion-icon name="logo-instagram"></ion-icon></span></Link> */}
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default About

