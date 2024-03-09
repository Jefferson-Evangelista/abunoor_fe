// import Swiper core and required modules
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { motion } from "framer-motion"



import { 
  hero1,
  hero2,
  hero3,
  hero4
} from '../assets/images'
import style from '../style';

const Hero = () => {
  return (
    <div className='container max-w-full w-full h-fit relative'>
      <div className='absolute top-0 z-10 bg-[rgba(0,0,0,0.4)] h-full w-full'/>
      <Swiper
      // install Swiper modules
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      autoplay={{delay:'6000'}}
      effect='fade'
      >
        <SwiperSlide><img src={hero1} alt="" className='w-full h-[600px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={hero2} alt="" className='w-full h-[600px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={hero3} alt="" className='w-full h-[600px] object-cover' /></SwiperSlide>
        <SwiperSlide><img src={hero4} alt="" className='w-full h-[600px] object-cover' /></SwiperSlide>
      
      </Swiper>
      
      <motion.div animate={{ x: 0  }} initial={false}>
      <div className='absolute z-10 sm:top-48 top-60 sm:left-20 left-12 sm:w-1/2 w-3/4'>
        <h1 className={`${style.titleWhite} sm:leading-[1.3em] leading-[1.5em]`}>Get ready for a world of wonder and fun!</h1>
        <h2 className='font-poppins text-white sm:text-[21px] text-[18px]'>Where Imagination Takes Flight!</h2>
      </div>
      </motion.div>

    </div>
    
  );
}

export default Hero