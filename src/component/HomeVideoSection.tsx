import React from 'react'
import Iframe from 'react-iframe'
import "../style/HomeVideoSection.css"
import kgf2 from "../assets/Narcos - Netflix.mp4"
import {BsFillPlayFill} from 'react-icons/bs'
import {HiVolumeOff} from 'react-icons/hi'


const HomeVideoSection = () => {
  return (
    <>
      <div className='narcos-video'>
        <video autoPlay loop muted id="myVideo" width={"100%"}>
          <source src={kgf2} type="video/mp4" />
        </video>
      <div className='main-narco-section'>
          <h1>Narcos</h1>
          <p>
            A gritty chronicle of the war against Colombia's infamously violent <br /> and powerful drug cartels.</p>
        <div className='info-speck-btn'>
          <div className='play-moreInfo'>
            <button className='play'><BsFillPlayFill/>  Play</button>
            <button  className='info'  >More Info</button>
          </div>
          <div className='Speaker-onOf'>
            <button><HiVolumeOff className='volume-off'/></button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default HomeVideoSection