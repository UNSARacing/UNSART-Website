import {Header, Footer, Home, News, Subteams, Sponsors} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import './App.css'

function App() {
    useEffect(() => {
    // Blokira Ctrl + Scroll (desktop)
    const wheelHandler = (e) => {
      if (e.ctrlKey) e.preventDefault();
    };
    // Blokira Ctrl + + / Ctrl + -
    const keyHandler = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "+" || e.key === "-" || e.key === "=")) {
        e.preventDefault();
      }
    };

    document.addEventListener("wheel", wheelHandler, { passive: false });
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("wheel", wheelHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);

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
