import {Home, News, OurTeam, Sponsors} from './pages';
import BlogPost from './components/BlogPost/BlogPost.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/news' element={<News />} />
         <Route path='/news/:slug' element={<BlogPost />} />
         <Route path='/our-team' element={<OurTeam />} />
         <Route path='/sponsors' element={<Sponsors />} />
      </Routes >
      <div style={{ position: 'relative', zIndex: 4 }}>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
