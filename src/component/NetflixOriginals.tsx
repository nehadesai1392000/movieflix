import React, { useEffect } from 'react'
import '../style/NetflixOriginals.css'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getData } from '../redux/netflixSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button, Modal } from 'antd';
import { useState } from 'react';


const NetflixOriginals = () => {


  //  popUp Data // 
  const [movie, setMovie]: any = useState({});
         
         console.log("movie",movie);
         
  const showDetails = (movies: any) => {
    setOpen(true)
    // axios.get(`https://api.themoviedb.org/3/movie/${movies.id}?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0`).then((response)=>{
    setMovie(movies);

    // })
  };
  // img Data//
  const dispatch = useDispatch()
  const useData = useSelector((state: any) => state?.netflixOriginals?.value);
  const imageUrl = "https://image.tmdb.org/t/p/original/"

  console.log(useData.data?.results[0]?.poster_path);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213`).then((response: any) => dispatch(getData(response)))
  }, []);



  // antd //
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='new-slider-imgPath'>
        <h2> Netflix Originals</h2>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {useData?.data?.results?.map((movies: any) => {
            return (
              <SwiperSlide>
                <div className='netflix-gerund'>
                  <img src={`${imageUrl}${movies.poster_path}`} alt="" width={"280"} onClick={() => showDetails(movies)} />
                </div>
                <Modal
                  centered
                  open={open}
                  onOk={() => setOpen(false)}
                  onCancel={() => setOpen(false)}
                  width={1000}
                >

                  <div >
                    <div className='byDefoe-dataImg'>
                      <img src={`${imageUrl}${movie.backdrop_path}`} alt="" />
                    </div>
                    <div className='data-main-popUp' >
                      <div className='Kingdom-main-sec'>
                        <h1>{movie?.name} </h1>
                      </div>
                      <div className='Rating-sec'>
                        <span>Rating: {movie.vote_average}</span>
                        <span>Release date: {movie.first_air_date }</span>
                        <span>Runtime:m</span>
                      </div>
                      <div className='popUp-para'>
                        <p>{movie?.overview}</p>
                      </div>

                      <div className='ply-myList'>
                        <button className='ply'>PLAY</button>
                        <button className='myList'>MY LIST</button>
                      </div>
                    </div>
                  </div>

                </Modal>


              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

    </>
  )
}

export default NetflixOriginals
