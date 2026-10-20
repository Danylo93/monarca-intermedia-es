import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'
import Contact from './components/Contact'
import AnalysisForm from './components/AnalysisForm'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <CTA />
        <AnalysisForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
