import '../styles/globals.css'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import LoadingBar from 'react-top-loading-bar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {const [progress, setProgress] = useState(0)
  const [user,setUser] = useState({value:null});
  const [key,setKey] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(30)
    })

    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })


    const token = localStorage.getItem('token')
    if(token){
      setUser({value:token})
      setKey(Math.random())
    }

  },[router.query])
  const logout = () =>{
    localStorage.removeItem("token")
    setTimeout(() => {
      setUser({value:null})
      setKey(Math.random())
      router.push('/')

    },1000);
   
  }
  return <> <LoadingBar
  color='#002C65'
  progress={progress}
  waitingTime={400}
  onLoaderFinished={() => setProgress(0)}/><Navbar Logout={logout} user={user} key={key} /><Component {...pageProps} /><Footer /></>
}

export default MyApp
