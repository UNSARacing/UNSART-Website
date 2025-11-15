import {Home, News, Subteams, Sponsors} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
   <Header />
    <Router>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/news' element={<News />} />
         <Route path='/subteams' element={<Subteams />} />
         <Route path='/sponsors' element={<Sponsors />} />
      </Routes >
    </Router>
    <Footer />
    </>
  )
}

export default App
