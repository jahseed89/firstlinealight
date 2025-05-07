// import { Routes, Route } from 'react-router-dom'
// import Header from './components/header/Header'
// import Home from './components/home/Home'
// import About from './components/about/About'
// import Cars from './components/cars/Cars'
// import OurBlog from './components/blog/OurBlog'
// import ContactUs from './components/contact/ContactUs'

// function App() {

//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cars" element={<Cars />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="blog" element={<OurBlog />} />
//         <Route path="*" element={<h1>404 Not Found</h1>} />
//       </Routes>
//     </>
//   )
// }

// export default App

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Cars from './components/cars/Cars';
import OurBlog from './components/blog/OurBlog';
import ContactUs from './components/contact/ContactUs';
import pageNotFound from '../src/assets/page-note-found.jpg';

function App() {
  const location = useLocation();

  // List of known routes where Header should be shown
  const knownPaths = ['/', '/about', '/cars', '/contact', '/blog'];
  const showHeader = knownPaths.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<OurBlog />} />
        <Route path="*" element={
          <div>
            <h1 className="text-center mt-20 text-red-600 text-3xl font-bold">
            404 - Page Not Found
            <img src={pageNotFound} alt="page not found" className='mx-auto' />
          </h1>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;

