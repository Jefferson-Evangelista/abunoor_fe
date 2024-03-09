import style from "../style"
import { aboutimg1 } from "../assets/images"

const About = () =>  (
    <div className='container max-w-full w-full h-auto flex flex-col sm:px-16 sm:py-0 p-12 gap-y-6'>
        <h1 className={`${style.title}`}>About Us</h1>
        <div className="flex md:flex-row flex-col justify-between md:space-y-0 space-y-10">
          <div className="md:w-[40%] flex md:flex-col h-auto justify-between gap-x-8">
            <div>
            <h1 className={`${style.subtitle}`}>Mission</h1>
            <p className={`${style.para} text-justify`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra est at mollis tristique. Curabitur placerat ante mi, auctor consectetur lacus dignissim non</p>
            </div>
            <div>
            <h1 className={`${style.subtitle}`}>Vision</h1>
            <p className={`${style.para} text-justify`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra est at mollis tristique. Curabitur placerat ante mi, auctor consectetur lacus dignissim non</p>
            </div>
            
          </div>
          <img src={aboutimg1} alt="about image" className='md:w-1/2 md:h-1/2'/>

        </div>    
    </div>
  )


export default About