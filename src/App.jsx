import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Company from './pages/company/Company'
import Products from './pages/products/Products'
import Service from './pages/service/Service'
import News from './pages/news/News'
import Partners from './pages/partners/Partners'
import { BiArrowToTop } from "react-icons/bi";
import { useState } from 'react'

function App() {
   const [showBtn, setShowbnt] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 155) {
      setShowbnt(true);
    } else {
      setShowbnt(false);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/feedback" element={<Partners />}></Route>
        </Routes>
        <Footer />
        <div
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
        class={showBtn ? "scrollToTop-btn active" : "scrollToTop-btn"}
      >
        <BiArrowToTop />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App
