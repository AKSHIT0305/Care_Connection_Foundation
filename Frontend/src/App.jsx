import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import GetInvolved from './pages/GetInvolved'
import Media from './pages/Media'
import NotFound from './pages/NotFound'
import Testimonials from './pages/Testimonials'



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/media" element={<Media />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
