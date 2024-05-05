import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar'; // Import Navbar component

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      
      {/* Router for page navigation */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
