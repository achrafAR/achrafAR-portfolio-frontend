import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SinglePage from './pages/singlePage.js';
import Dashboard from './pages/Dashboard.js';
import Login from './pages/Login.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer /> 

        <Routes>
          <Route path='/' element={<SinglePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path='/projects/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
