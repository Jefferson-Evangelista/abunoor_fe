// import style from '../style'

import React from 'react'

const Navbar = () => {
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
    <nav className='relative container max-w-full w-full flex justify-between h-[70px] items-center bg-[#DA1698] p-16'>
      <div>
        <h1 className='font-poppins font-bold text-white text-[20px] uppercase '>Abu Noor <br /><span className='text-[#EFBC26]'>School</span></h1>
        <div className='absolute left-44 top-8 z-20 bg-white w-[150px] h-[150px] border-[20px] border-[#EFBC26] rounded-full flex justify-center items-center'>
          <h1>logo</h1>
        </div>
      </div>

      <div className='flex flex-row justify-end items-start '>
            <ul className='sm:flex hidden text-white font-semibold font-poppins text-[14px] gap-x-4 tracking-widest cursor-pointer '>
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

    </nav>
  )
}

export default Navbar