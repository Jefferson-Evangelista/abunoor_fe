//pages
import {
  Navbar,
  Hero,
  CTA,
  Programs,
  About,
  Testimonials,
  News,
  Footer,
} from './components'


import style from './style'
const App = () => {

  return (
    <main className='container max-w-full overflow-hidden'>
        <Navbar />
        <Hero />
      <div className={`${style.margin}`}>
        <CTA />
      </div >
      <div className={`${style.padding}  bg-[#EFBC26]`}>
        <Programs />
      </div >
      <div className={`${style.margin}`}>
        <About />
      </div >
      <div className={`${style.padding} bg-[#9CD24A]`}>
        <Testimonials />
      </div>
      <div className={`${style.padding} bg-[#F0F0F0]`}>
        <News />
      </div >
      <div className={`${style.padding} bg-[#DA1698]`}>
        <Footer />
      </div >
      
    </main>
  )
}

export default App
