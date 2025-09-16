import About from './components/About'
import ContactSection from './components/contact'
import Events from './components/events'
import Footer from './components/Footer'
import Hero from './components/herosection'
import MapEmbed from './components/map'
import Navbar from './components/navbar'
import NewsletterSection from './components/newsletter'
import Sermons from './components/Sermons'
import Testimonials from './components/testimonial'
import DevotionSection from './components/Devotion'
import { useEffect } from 'react'
import AOS from 'aos'
import { Toaster } from 'react-hot-toast'

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80, easing: 'ease-out-cubic' })
  }, [])
  return (
    <>
    <Toaster position="top-right" toastOptions={{
      style: { background: 'white', color: '#111827', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' },
      success: { iconTheme: { primary: '#10b981', secondary: 'white' } },
      error: { iconTheme: { primary: '#ef4444', secondary: 'white' } },
    }} />
    <Navbar/>
    <Hero/>
    <div data-aos="fade-up"><About/></div>
    <div data-aos="fade-up" data-aos-delay="50"><DevotionSection/></div>
    <div data-aos="fade-up" data-aos-delay="100"><Sermons/></div>
    <div data-aos="fade-up" data-aos-delay="150"><Events/></div>
    <div data-aos="fade-up" data-aos-delay="200"><Testimonials/></div>
    <div data-aos="fade-up" data-aos-delay="250"><NewsletterSection/></div>
    <div data-aos="fade-up" data-aos-delay="300"><ContactSection/></div>
    <div data-aos="fade-up" data-aos-delay="350"><MapEmbed/></div>
    <Footer/>

    </>
  )
}

export default App
