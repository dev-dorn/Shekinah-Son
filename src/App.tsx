import './App.css'
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

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Sermons/>
    <Events/>
    <Testimonials/>
    <NewsletterSection/>
    <ContactSection/>
    <MapEmbed/>
    <Footer/>

    </>
  )
}

export default App
