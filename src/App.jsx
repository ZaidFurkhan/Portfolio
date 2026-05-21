
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {



  return (
    <div className='bg-gradient-to-r from-gray-300 via-gray-200 to-gray-50 min-h-screen m-0 p-0 w-full'>
      <Navbar />

      {/* Hero Section (The curtain that slides UP) */}
      <div className="relative z-20 shadow-[0_40px_30px_rgba(0,0,0,0.1)]">
        <Hero className="h-screen" />
      </div>

      <Experience />
      <Projects />
      <Certifications />
      

      {/* Tech Section (The content revealed BEHIND) */}
      <div className="relative h-screen z-10">
        <div className="sticky bottom-0 h-screen w-full">
          <Tech />

          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
