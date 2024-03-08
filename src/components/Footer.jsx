import React from 'react'
import style from '../style'
import {footerimg1, footerimg2} from '../assets/images'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { pin } from '../assets/images'
import { Icon } from 'leaflet'


const customIcon = new Icon ({
  iconUrl: pin,
  iconSize: [38, 38]
})

const Footer = () => {
  return (
    <div className='container max-w-full w-full text-white'>
      <div className='flex justify-around'>
        <div className='flex flex-col w-1/5 items-center p'>
          <div className=' bg-white w-[150px] h-[150px] border-[20px] border-[#EFBC26] rounded-full flex justify-center items-center mb-4'>
            <h1 style={{color: 'black'}}>logo</h1>
          </div>
          <h1 style={{color: 'white'}} className={`${style.title2} text-[20px]`}>ABU NOOR <br /><span className='text-[#EFBC26]'>SCHOOL</span> </h1>
        </div>

        <div>
          <h1 style={{color: 'white'}} className={`${style.subtitle2} text-[20px] mb-2`}>Pages</h1>
          <div className='space-y-2'>
            <p style={{color: 'white'}} className={`${style.para2} text-[16px]`}>About Us</p>
            <p style={{color: 'white'}} className={`${style.para2} text-[16px]`}>Programs</p>
            <p style={{color: 'white'}} className={`${style.para2} text-[16px]`}>Admissions</p>
            <p style={{color: 'white'}} className={`${style.para2} text-[16px]`}>Partners</p>
          </div>
          
        </div>

        <div>
          <h1 style={{color: 'white'}} className={`${style.subtitle2} text-[20px] mb-2`}>Contacts</h1>
          <div className='flex items-center'>
          <img src={footerimg1} style={{marginLeft:'0'}} className='w-[32px] h-[32px] m-2'/>
          <p style={{color: 'white'}} className={`${style.para2} text-[16px]`}>johndoe@gmail.com</p>
          </div>
          
          <div className='flex items-center '>
          <img src={footerimg2} style={{marginLeft:'0'}} className='w-[32px] h-[32px] m-2'/>
          <p style={{color: 'white'}} className={`${style.para2} text-[16px]`}>428-249-6699</p>
          </div>
        </div>

        <div className='container max-w-full md:h-[180px] md:w-[300px] sm:h-[140px] sm:w-[200px] h-[90px] w-[120px]'>
          <h1 style={{color: 'white'}} className={`${style.subtitle2} text-[20px] mb-2`}>Location</h1>
          <MapContainer center={[24.691361331892374, 46.70914182107918]} zoom={13} className='container max-w-full h-full'>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[24.691443700820773, 46.70920980214302]} icon={customIcon} >
              <Popup className='text-center'>
                <h1 className='font-poppins font-bold'>Abu Noor School</h1>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <div className='h-[0.2px] bg-[#FFF] mt-8 mx-auto'/>
      
      <h1 style={{color:"white"}} className={`${style.para2} text-[12px] text-center mt-4`}>© 2024 Yaramay | All Rights Reserved Yaramay </h1>
      
    </div>
  )
}

export default Footer