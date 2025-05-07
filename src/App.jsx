import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Cars from './components/cars/Cars'
import OurBlog from './components/blog/OurBlog'
import ContactUs from './components/contact/ContactUs'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/blog" element={<ContactUs />} />
        <Route path="contact" element={<OurBlog />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
