import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import SkinConcerns from './pages/SkinConcerns'
import About from './pages/About'
import Contact from './pages/Contact'
import BookNow from './pages/BookNow'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skin-concerns" element={<SkinConcerns />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookNow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
