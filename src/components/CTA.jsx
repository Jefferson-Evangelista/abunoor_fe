import style from '../style'
import { 
  ctaimg1,
  ctaimg2,
  ctaimg3,
} from '../assets/images'

const Context = (props) => (
  <div className='w-[20%] h-full flex flex-col justify-center items-center gap-y-4'>
    <img src={props.img} alt={props.title} className='w-[100px] h-[100px]'/>
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='font-poppins font-bold text-[18px]'>{props.title}</h1>
      <p className={`${style.para}`}>{props.context}</p>
    </div>
    
  </div>
)

const CTA = () => {

  return (
    <div className='flex justify-around container max-w-full w-full h-[200px]'>
      <Context img={ctaimg1} title='Apply Now' context='Apply online using our admissions page'/>
      <Context img={ctaimg2} title='Collaborate with us' context="Let’s work together!"/>
      <Context img={ctaimg3} title='Contact Us' context='Have questions? Reach us here.'/>
    </div>
  )
}

export default CTA