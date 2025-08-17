import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import About from './pages/About'
import Home from './pages/Home'
import ProductsPage from './pages/Shop'
import Coaching from './pages/Coaching'
import ContactSection from './pages/Contact'





export default function Router() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<ProductsPage/>}/>
        <Route path="/coaching" element={<Coaching/>}/>
        <Route path="/contact" element={<ContactSection/>}/>
        
        
      </Routes>
    <Footer/>
    
    </BrowserRouter>
  )
}
