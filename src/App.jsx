import { LanguageProvider } from './lib/i18n.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import ProductTour from './components/ProductTour.jsx'
import Solutions from './components/Solutions.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink-900">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <ProductTour />
          <Solutions />
          <HowItWorks />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
