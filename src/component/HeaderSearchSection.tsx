import React from 'react'
import "../style/HeaderSearchSection.css"
import { HiOutlineSearch } from 'react-icons/hi';
import { BsBellFill } from 'react-icons/bs';


const HeaderSearchSection = () => {
  return (
    <div className='header-search-section-main'>
     <div className='search-box'>
     <input type="text" /><HiOutlineSearch/>
     </div>
     <div className='kind-dvd-sec'>
      <ul>
        <li>KIND</li>
        <li>DVD</li>
      </ul>
     </div>
     <div className='bellFill-icon'>
           <BsBellFill/>
       </div>
       <div className='navigation__container--userLogo'>

       </div>


    </div>
  )
}

export default HeaderSearchSection