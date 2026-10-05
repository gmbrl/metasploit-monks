import MatrixRain from './components/MatrixRain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Team from './components/Team'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <MatrixRain />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Team />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
