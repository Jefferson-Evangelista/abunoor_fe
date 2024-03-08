import style from "../style"
import { aboutimg1 } from "../assets/images"

const About = () =>  (
    <div className='container max-w-full w-full h-auto flex flex-col px-16 gap-y-6'>
        <h1 className={`${style.title}`}>About Us</h1>
        <div className="flex justify-between ">
          <div className="w-[40%] flex flex-col h-auto justify-between">
            <div>
            <h1 className={`${style.subtitle}`}>Mission</h1>
            <p className={`${style.para} text-justify`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra est at mollis tristique. Curabitur placerat ante mi, auctor consectetur lacus dignissim non</p>
            </div>
            <div>
            <h1 className={`${style.subtitle}`}>Vision</h1>
            <p className={`${style.para} text-justify`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra est at mollis tristique. Curabitur placerat ante mi, auctor consectetur lacus dignissim non</p>
            </div>
            
          </div>
          <img src={aboutimg1} alt="about image" />

        </div>    
    </div>
  )


export default About