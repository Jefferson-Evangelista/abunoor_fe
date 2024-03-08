import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';


import { Autoplay } from 'swiper/modules';

import style from '../style';
import { delay } from 'framer-motion';

const ProgramCard = (props) => (
  <div className='h-full p-6 flex flex-col justify-center '>
    <h1 className={`${style.title2} text-[16px]`}>{ props.title }</h1>
    <p className={`${style.para2} text-[14px]`}>{ props.para }</p>
  </div>
)

const Programs = () => {
  return (
    <div className='container max-w-full w-full h-fit'>
      <div className='mb-6'> 
        <h1 className={`${style.title} text-center`}>Programs</h1>
        <p style={{color:'#292929'}} className={`${style.para} text-center`}>Explore a world of opportunities for your child through our varied and enriching programs.</p>
      </div>
      
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        loop={true}
        autoplay={{delay: '10000'}}
        
        modules={[Autoplay]}
        className="w-full"
      >
        <SwiperSlide className='w-[500px] h-[200px]'>
            {({ isActive }) => (
              <div className={`${!isActive ? 'bg-[#F3CA52] text-[#FFFF]' : 'bg-[#FFFF] text-[#000]'} h-full`}>
                <ProgramCard title='Pre-Kindergarten' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '/>
              </div>
            )}
          
        </SwiperSlide>
        
        <SwiperSlide className='w-[500px] h-[200px] '>
            {({ isActive }) => (
              <div className={`${!isActive ? 'bg-[#F3CA52] text-[#FFFF]' : 'bg-[#FFFF] text-[#000]'} h-full`}>
                <ProgramCard title='Kindergarten' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '/>
              </div>
            )}
          
        </SwiperSlide>
        
        <SwiperSlide className='w-[500px] h-[200px]'>
            {({ isActive }) => (
              <div className={`${!isActive ? 'bg-[#F3CA52] text-[#FFFF]' : 'bg-[#FFFF] text-[#000]'} h-full`}>
                <ProgramCard title='Elementary' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '/>
              </div>
            )}
          
        </SwiperSlide>
        
      </Swiper>
  </div>
  )
}

export default Programs