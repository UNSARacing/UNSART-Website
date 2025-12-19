import {Home, News, OurTeam, Sponsors} from './pages';
import BlogPost from './components/BlogPost/BlogPost.jsx';
import Impressum from './pages/Impressum/Impressum.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import './App.css'

function App() {

  return (
    <Router basename="/UNSART-Website">
      <ScrollToTop />
      <Header />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/news' element={<News />} />
         <Route path='/news/:slug' element={<BlogPost />} />
         <Route path='/our-team' element={<OurTeam />} />
         <Route path='/sponsors' element={<Sponsors />} />
         <Route path='/impressum' element={<Impressum />} />
      </Routes >
      <div style={{ position: 'relative', zIndex: 4 }}>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
