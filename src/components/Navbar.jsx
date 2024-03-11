// import style from '../style'
import style from '../style'

import { useState } from 'react'
import { close , menu, logo } from '../assets/images'

const Navbar = () => {
  const [toggle, setToggle] = useState (false)

  const navLinks = [
    {
      id: '/',
      title: 'ABOUT US'
    },
    {
      id: '/menu',
      title: 'PROGRAMS'
    },
    {
      id: '/about',
      title: 'ADMISSION'
    },
    {
      id: '/book',
      title: 'PARTNERS'
    },
  ]
  return (
    <nav className='relative container max-w-full w-full flex justify-between h-[70px] items-center bg-[#DA1698] sm:p-16 p-12'>
      <div>
        <h1 className={`${style.titleWhite2} text-[20px] uppercase`}>Abu Noor <br /><span className='text-[#EFBC26]'>School</span></h1>
        <div className='absolute sm:left-44 xs:left-48 left-40 top-8 z-20 bg-white sm:w-[150px] sm:h-[150px] w-[125px] h-[125px] border-[20px] border-[#EFBC26] rounded-full flex justify-center items-center'>
          <img src={ logo } alt="" className=' rounded-full'/>
        </div>
      </div>

      <div className='flex flex-row justify-end items-start '>
            <ul className='md:flex hidden text-white font-semibold font-poppins text-[14px] gap-x-4 tracking-widest cursor-pointer '>
              {navLinks.map(( nav) => (
                  <li
                  key={nav.id} 
                 >
                    <a href={`${nav.id}`} className={`group transition duration-300`} >{nav.title}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] mt-[0.5px] bg-[#EFBC26]"/>
                    </a>
                  </li>
              ))}
            </ul>
      </div>

      {/* hamburger menu */}
      <div className='absolute z-50 md:hidden container max-w-full h-[40px] w-5/6 flex flex-1 justify-end items-end '>
        <img 
        src={toggle ? close : menu } 
        className='w-[28px] h-[28px] object-contain'
        onClick={() => setToggle((prev) => !prev)} 
        />

        <div  className={`${toggle ? 'flex' : 'hidden'} p-4 absolute top-9 right-0 my-2 min-w-[100px]  sidebar bg-[rgba(0,0,0,0.2)] border-2 border-white`}>
              <ul className='z-20 list-none flex flex-col justify-center items-center flex-1'>
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-2'} text-white  `}
                  >
                    <a href={`${nav.id}`}>
                      {nav.title}
                    </a>

                  </li>
                ))}
              </ul>
        </div>
      </div>



    </nav>
  )
}

export default Navbar