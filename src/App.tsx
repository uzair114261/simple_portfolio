import './App.css'
import BlurBackground from './components/BlurBackground'
import NavbarMain from './components/NavbarMain'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'

function App() {

  return (
    <>
    <BlurBackground/>
    <NavbarMain/>
    <main className='antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10'>
      <NavbarMain/>
      <Hero/>
      <Projects/>
      <About/>
      <Experience/>
      <Testimonials/>
      <Contacts/>
    </main>
    </>
  )
}

export default App