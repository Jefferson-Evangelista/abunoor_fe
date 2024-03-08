import style from "../style"
import { testimonialsimg1 } from "../assets/images"

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const TestimonialsCard = (props) => (
  <div className="bg-[rgba(255,255,255,0.65)] w-full h-[400px] flex flex-col justify-center items-center text-center p-14">
      <p className={`${style.subtitle2} text-[24px]`}>{ props.para }</p>
      <div className="flex w-fit mt-8 space-x-4 items-center">
        <img src={props.img} alt={props.name} className="w-[60px] h-[60px] rounded-full"/>
        <div className="text-start">
          <h1 className={`${style.subtitle2} text-[16px]`}>{ props.name }</h1>
          <p className={`${style.para2} text-[12px]`}>{ props.jobtitle}</p>
        </div>
      </div>
  </div>
)

const Testimonials = () => {
  return (
    <div className='container max-w-full w-full flex flex-col justify-center items-center px-20'>
      <h1 className={`${style.titleWhite} mb-4`}>Testimonials</h1>
      <Swiper
      // install Swiper modules
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