
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';




import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';



function App() {
  const [title,setTitle] = useState("portfolio");
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home title="Home"/>} />
                <Route path="/about" element={<About title="About"/>} />
                <Route path="/projects" element={<Projects title="Projects"/>} />
                <Route path="/contact" element={<Contact title="Contact"/>} />
            </Routes>
        </Router>
  );
}

export default App;
