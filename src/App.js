import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Home from './pages';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
