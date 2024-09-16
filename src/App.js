import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from "./components/Navbar";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
