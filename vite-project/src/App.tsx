import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projets from './pages/Projets'
import Footer from './components/Footer'

import { Routes, Route } from "react-router-dom";
import Button from './components/Button'

function App() {
  return (
    <>
      <Navbar></Navbar>

      {/* routes  */}
      <div className='container-fluid'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projets" element={<Projets />} />
        </Routes>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;