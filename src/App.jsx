import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Training from './pages/training'
import Contact from './pages/contact'
import Mediation from './services/mediation'
import Negotiation from './services/negotiation'
import Counseling from './services/counseling'
import Conciliation from './services/conciliation'
import Services from './pages/services'
import Gallery from './pages/gallery'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        {/* Sub Section Pages */}
        <Route path="/services/mediation" element={<Mediation />} />
        <Route path="/services/negotiation" element={<Negotiation />} />
        <Route path="/services/counseling" element={<Counseling />} />
        <Route path="/services/conciliation" element={<Conciliation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App
