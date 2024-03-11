import style from "../style"
import { testimonialsimg1 } from "../assets/images"

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const TestimonialsCard = (props) => (
  <div className="bg-[rgba(255,255,255,0.65)] w-full h-[400px] flex flex-col justify-center items-center text-center sm:p-12 px-8 ">
      <p className={`${style.subtitle2} md:text-[24px] sm:text-[18px] text-[14px]`}>{ props.para }</p>
      <div className="flex sm:w-fit w-3/4 mt-8 space-x-4 justify-center items-center">
        <img src={props.img} alt={props.name} className="md:w-[60px] md:h-[60px] w-[45px] h-[45px] rounded-full"/>
        <div className="text-start w-fit">
          <h1 className={`${style.subtitle2} sm:text-[16px] text-[12px]`}>{ props.name }</h1>
          <p className={`${style.para2} text-[10px] `}>{ props.jobtitle}</p>
        </div>
      </div>
  </div>
)

const Testimonials = () => {
  return (
    <div className='container max-w-full w-full h-[500px] flex flex-col justify-center items-center md:px-0'>
      <h1 className={`${style.titleWhite2} md:text-[40px] text-[28px] mb-4`}>Testimonials</h1>
      <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{delay:'5000'}}
      className="w-5/6"
      >
        <SwiperSlide>
          <TestimonialsCard para='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra est at mollis tristique. Curabitur placerat ante mi, auctor consectetur lacus dignissim non. Pellentesque elementum mauris non odio venenatis, quis ullamcorper erat posuere. Integer auctor nibh non nibh eleifend, at malesuada ipsum condimentum. ”' img={testimonialsimg1} name='DR. JANE DOE' jobtitle='Lorem ipsum dolor sit amet'/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsCard para='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra est at mollis tristique. Curabitur placerat ante mi, auctor consectetur lacus dignissim non. Pellentesque elementum mauris non odio venenatis, quis ullamcorper erat posuere. Integer auctor nibh non nibh eleifend, at malesuada ipsum condimentum. ”' img={testimonialsimg1} name='DR. JANE DOE' jobtitle='Lorem ipsum dolor sit amet 123'/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsCard para='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra est at mollis tristique. Curabitur placerat ante mi, auctor consectetur lacus dignissim non. Pellentesque elementum mauris non odio venenatis, quis ullamcorper erat posuere. Integer auctor nibh non nibh eleifend, at malesuada ipsum condimentum. ”' img={testimonialsimg1} name='DR. JANE DOE' jobtitle='Lorem ipsum dolor sit amet 123'/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsCard para='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra est at mollis tristique. Curabitur placerat ante mi, auctor consectetur lacus dignissim non. Pellentesque elementum mauris non odio venenatis, quis ullamcorper erat posuere. Integer auctor nibh non nibh eleifend, at malesuada ipsum condimentum. ”' img={testimonialsimg1} name='DR. JANE DOE' jobtitle='Lorem ipsum dolor sit amet 123'/>
        </SwiperSlide>
       
       
      
      </Swiper>

      

    </div>
  )
}

export default Testimonials