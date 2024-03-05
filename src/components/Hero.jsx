// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from "framer-motion"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { 
  hero1,
  hero2,
  hero3,
  hero4
} from '../assets/images'

const Hero = () => {
  return (
    <div className='container max-w-full w-full h-fit  relative '>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay:'6000'}}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      effect='fade'
    >
      
        <SwiperSlide><img src={hero1} alt="" className='w-full h-[600px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={hero2} alt="" className='w-full h-[600px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={hero3} alt="" className='w-full h-[600px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={hero4} alt="" className='w-full h-[600px] object-cover' /></SwiperSlide>
      
      </Swiper>
      <div className='absolute top-0 z-10 bg-[rgba(0,0,0,0.4)] h-full w-full'/>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      >
      <div className='absolute z-10 top-48 left-20 w-1/2'>
        <h1 className='font-poppins font-bold text-white text-[60px]'>Get ready for a world of wonder and fun!</h1>
        <h2 className='font-poppins text-white text-[18px]'>Where Imagination Takes Flight!</h2>
      </div>
      </motion.div>
      
    </div>
    
  );
}

export default Hero