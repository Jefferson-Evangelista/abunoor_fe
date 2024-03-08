import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination} from 'swiper/modules';

import style from '../style';

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
        <p style={{color:'black'}} className={`${style.para} text-center`}>Explore a world of opportunities for your child through our varied and enriching programs.</p>
      </div>
      
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        pagination={true}
        className='w-full px-[50px]'

        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        spaceBetween={100}
        initialSlide={1}
        scrollbar={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
          
      >
        <SwiperSlide className='w-[500px] h-[200px]'>
            {({ isActive }) => (
              <div className={`${!isActive ? 'bg-[#F3CA52] text-white' : 'bg-[#FFFF] text-[#000] delay-75'} h-full`}>
                <ProgramCard title='Pre-Kindergarten' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '/>
              </div>
            )}
          
        </SwiperSlide>
        
        <SwiperSlide className='w-[500px] h-[200px] '>
            {({ isActive }) => (
              <div className={`${!isActive ? 'bg-[#F3CA52] text-white' : 'bg-[#FFFF] text-[#000]'} h-full`}>
                <ProgramCard title='Kindergarten' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '/>
              </div>
            )}
          
        </SwiperSlide>
        
        <SwiperSlide className='w-[500px] h-[200px]'>
            {({ isActive }) => (
              <div className={`${!isActive ? 'bg-[#F3CA52] text-white' : 'bg-[#FFFF] text-[#000]'} h-full`}>
                <ProgramCard title='Elementary' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '/>
              </div>
            )}
          
        </SwiperSlide>
        
      </Swiper>
  </div>
  )
}

export default Programs