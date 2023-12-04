import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination} from 'swiper/modules';
import './Banner.css'
// import library from '../../../assets/imgs/banner/library.png'
import books from '../../../assets/imgs/banner/library.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner_left_side">
            <h3>Tahseen - barcha kitobxonlar uchun onlayn kutubxona</h3>
            {/* <h1>"Ilm ila najot sari"</h1> */}
        </div>
        <div className='library_logo'>
            <img src={books} alt="" />
        </div>
    </div>
  )
}

export default Banner
