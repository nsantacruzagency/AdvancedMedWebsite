import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import BookNow from './pages/BookNow'
import Testimonials from './pages/Testimonials'
import Memberships from './pages/Memberships'

// Weight & Metabolic Health
import NonInvasiveWeightLoss from './pages/weight-health/NonInvasiveWeightLoss'
import BodyContouring from './pages/weight-health/BodyContouring'
import Massages from './pages/weight-health/Massages'
import PeptidesGLPs from './pages/weight-health/PeptidesGLPs'
import IVsShots from './pages/weight-health/IVsShots'
import HairRestoration from './pages/weight-health/HairRestoration'
import BloodTestsLongevity from './pages/weight-health/BloodTestsLongevity'

// Skin Concerns
import Acne from './pages/skin-concerns/Acne'
import Aging from './pages/skin-concerns/Aging'
import Hyperpigmentation from './pages/skin-concerns/Hyperpigmentation'
import StretchMarksScars from './pages/skin-concerns/StretchMarksScars'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<BookNow />} />
            <Route path="/contact" element={<BookNow />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/memberships" element={<Memberships />} />

            {/* Weight & Metabolic Health */}
            <Route path="/weight-health/non-invasive-weight-loss" element={<NonInvasiveWeightLoss />} />
            <Route path="/weight-health/body-contouring" element={<BodyContouring />} />
            <Route path="/weight-health/massages" element={<Massages />} />
            <Route path="/weight-health/peptides-glps" element={<PeptidesGLPs />} />
            <Route path="/weight-health/ivs-shots" element={<IVsShots />} />
            <Route path="/weight-health/hair-restoration" element={<HairRestoration />} />
            <Route path="/weight-health/blood-tests-longevity" element={<BloodTestsLongevity />} />

            {/* Skin Concerns */}
            <Route path="/skin-concerns/acne" element={<Acne />} />
            <Route path="/skin-concerns/aging" element={<Aging />} />
            <Route path="/skin-concerns/hyperpigmentation" element={<Hyperpigmentation />} />
            <Route path="/skin-concerns/stretch-marks-scars" element={<StretchMarksScars />} />

            {/* Legacy redirects */}
            <Route path="/services" element={<NonInvasiveWeightLoss />} />
            <Route path="/skin-concerns" element={<Acne />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
