import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import BookNow from './pages/BookNow'
import Testimonials from './pages/Testimonials'
import Memberships from './pages/Memberships'
import PartnerServices from './pages/PartnerServices'
import Products from './pages/Products'
import PersonalizedEvaluation from './pages/PersonalizedEvaluation'

// Body Aesthetics
import NonInvasiveWeightLoss from './pages/weight-health/NonInvasiveWeightLoss'
import NonSurgicalLipo from './pages/weight-health/NonSurgicalLipo'
import BodyContouring from './pages/weight-health/BodyContouring'
import Massages from './pages/weight-health/Massages'
import BrazilianButt from './pages/weight-health/BrazilianButt'
import Lipedema from './pages/weight-health/Lipedema'
import PostGLPSkinTightening from './pages/weight-health/PostGLPSkinTightening'
import CelluliteTreatment from './pages/weight-health/CelluliteTreatment'
import PostOpMassages from './pages/weight-health/PostOpMassages'

// Stem Cells & Wellness
import PeptidesGLPs from './pages/weight-health/PeptidesGLPs'
import IVsShots from './pages/weight-health/IVsShots'
import HairRestoration from './pages/weight-health/HairRestoration'
import BloodTestsLongevity from './pages/weight-health/BloodTestsLongevity'
import JointPainStemCells from './pages/stem-cells/JointPainStemCells'

// Skin Concerns
import Acne from './pages/skin-concerns/Acne'
import Aging from './pages/skin-concerns/Aging'
import Hyperpigmentation from './pages/skin-concerns/Hyperpigmentation'
import StretchMarksScars from './pages/skin-concerns/StretchMarksScars'
import MaintainResults from './pages/skin-concerns/MaintainResults'

function App() {
  return (
    <Router>
      <ScrollToTop />
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
            <Route path="/partner-services" element={<PartnerServices />} />
            <Route path="/personalized-evaluation" element={<PersonalizedEvaluation />} />

            {/* Body Aesthetics */}
            <Route path="/non-invasive-weight-loss" element={<NonInvasiveWeightLoss />} />
            <Route path="/non-surgical-lipo" element={<NonSurgicalLipo />} />
            <Route path="/cellulite-skin-tightening" element={<BodyContouring />} />
            <Route path="/post-glp1-skin-tightening" element={<PostGLPSkinTightening />} />
            <Route path="/cellulite-treatment" element={<CelluliteTreatment />} />
            <Route path="/body-contouring-massages" element={<Massages />} />
            <Route path="/post-op-massages" element={<PostOpMassages />} />
            <Route path="/brazilian-butt" element={<BrazilianButt />} />
            <Route path="/lipedema" element={<Lipedema />} />

            {/* Stem Cells & Wellness */}
            <Route path="/peptides-glps" element={<PeptidesGLPs />} />
            <Route path="/ivs-intramuscular-shots" element={<IVsShots />} />
            <Route path="/hair-restoration-stem-cells" element={<HairRestoration />} />
            <Route path="/what-do-blood-tests-tell-us" element={<BloodTestsLongevity />} />
            <Route path="/joint-pain-stem-cells" element={<JointPainStemCells />} />

            {/* Skin Concerns */}
            <Route path="/skin-concerns/acne" element={<Acne />} />
            <Route path="/skin-concerns/aging" element={<Aging />} />
            <Route path="/skin-concerns/hyperpigmentation" element={<Hyperpigmentation />} />
            <Route path="/skin-concerns/stretch-marks-scars" element={<StretchMarksScars />} />
            <Route path="/skin-concerns/maintain-results" element={<MaintainResults />} />
            <Route path="/products" element={<Products />} />

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
