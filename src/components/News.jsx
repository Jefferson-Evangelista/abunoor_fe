import React from 'react'
import style from '../style'

import { 
  hero1,
  hero2,
  hero3,
  hero4
} from '../assets/images'

const NewsCard = (props) => (
  <div className='w-[250px] h-[300px]  bg-white'>
    <img src={props.img}alt="" className='w-full h-[140px] '/>
    <div className='p-4 space-y-2'>
      <h1 className={`${style.subtitle2} text-[12px]`}>NEWS AND EVENTS</h1>
      <h1 className={`${style.title2} text-[16px] uppercase leading-4`}>{ props.title }</h1>
      <p className={`${style.para2} text-[12px]`}>By {props.author} - {props.date}</p>
      <button className={`${style.title2} text-[12] hover:underline`}>READ MORE</button>
    </div>
    
  </div>
)

const News = () => {
  return (
    <div className='container max-w-full w-3/4 mx-auto flex flex-col items-center'>
      <h1 className={`${style.title} mb-8`}>News & Events</h1>
      <div className='grid grid-cols-3 place-items-center gap-y-20 w-full'>
        <NewsCard img={hero1} title='ANG NAGNAKAW NG NAWAWALANG BATO' author='Anak ng Tokwa' date='January 12, 2020'/>
        <NewsCard img={hero2} title='ANG NAGNAKAW NG NAWAWALANG BATO' author='Anak ng Tokwa' date='January 12, 2020'/>
        <NewsCard img={hero3} title='ANG NAGNAKAW NG NAWAWALANG BATO' author='Anak ng Tokwa' date='January 12, 2020'/>
        <NewsCard img={hero4} title='ANG NAGNAKAW NG NAWAWALANG BATO' author='Anak ng Tokwa' date='January 12, 2020'/>
        <NewsCard img={hero2} title='ANG NAGNAKAW NG NAWAWALANG BATO' author='Anak ng Tokwa' date='January 12, 2020'/>
        <NewsCard img={hero3} title='ANG NAGNAKAW NG NAWAWALANG BATO' author='Anak ng Tokwa' date='January 12, 2020'/>
      </div>
      
    </div>
  )
}

export default News