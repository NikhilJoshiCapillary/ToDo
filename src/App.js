import logo from './logo.svg';
import './App.css';
import Todos from './Todos';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import { Routes, Route } from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

// hotfix is required here
