import { useCallback, useEffect, useState } from 'react'
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
import CancellationPolicy from './components/CancellationPolicy'

const POLICY_HASH = '#politica-cancelamento'

export default function App() {
  const [policyOpen, setPolicyOpen] = useState(false)

  // Permite abrir a política direto por link (ex.: site.com/#politica-cancelamento)
  useEffect(() => {
    const syncFromHash = () => setPolicyOpen(window.location.hash === POLICY_HASH)
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  const openPolicy = useCallback(() => {
    setPolicyOpen(true)
    if (window.location.hash !== POLICY_HASH) {
      history.replaceState(null, '', POLICY_HASH)
    }
  }, [])

  const closePolicy = useCallback(() => {
    setPolicyOpen(false)
    if (window.location.hash === POLICY_HASH) {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [])

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
      <Footer onOpenPolicy={openPolicy} />
      <WhatsAppFloat />
      <CancellationPolicy open={policyOpen} onClose={closePolicy} />
    </>
  )
}
