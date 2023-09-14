import { useState } from 'react'
import './App.css'
import ActionMovies from './component/ActionMovies'
import Documentaries from './component/Documentaries'
import HomeVideoSection from './component/HomeVideoSection'
import HorrorMovies from './component/HorrorMovies'
import MainHeader from './component/MainHeader'
import NetflixOriginals from './component/NetflixOriginals'
import Romance from './component/Romance'
import TopRated from './component/TopRated'
import Trending from './component/Trending'


function App() {

  return (
    <>
    <MainHeader/>
    <HomeVideoSection/>
   <NetflixOriginals/>
   <Trending/>
   <TopRated/>
  <ActionMovies/>
  <HorrorMovies/>
  <Romance/>
  <Documentaries/>

    </>
  )
}

export default App
