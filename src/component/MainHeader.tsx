import React, { useEffect, useState } from 'react'
import "../style/MainHeader.css"
import HeaderLogoSection from './HeaderLogoSection'
import HeaderSearchSection from './HeaderSearchSection'

const MainHeader = () => {
  const [changHeader,setChangHeader] = useState (false);

  const changScroll =()=>{
    const scrollBarValue = document.documentElement.scrollTop;
  if(scrollBarValue >70){setChangHeader(true);}
  else{
    setChangHeader(false);}
  }
useEffect(()=>{
window.addEventListener("scroll",changScroll);
},[]);


  return (
    <>
    <div className=''>
    <div className='searchAndLogo-part'>
    <HeaderLogoSection/>
    <HeaderSearchSection/>
    
    </div>
    </div>
    
    </>
  )
}

export default MainHeader