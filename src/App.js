import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './main components/Home';
import AboutUs from './main components/AboutUs';
import Oursolutions from './main components/Oursolutions';
import Footer from './main components/Footer';
import Career from './main components/Career';
import Contact1 from './main components/Contact1';
import { data, services } from './main components/obnjectsfie'
import Oursolutions2 from './main components/Oursolutions2';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {data.map((c) => {
          return (
            <Route
              key={c.title}
              path={`/solutions/${c.title}`}
              element={<Oursolutions2 titles={c.title} info={c.info} inmg={c.inmg} />}
            />
          )
        })}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/solutions" element={<Oursolutions2 />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact1 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;