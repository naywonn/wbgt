import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import AddStaff from "./Staffs/AddStaff";
import EditStaff from "./Staffs/EditStaff";
import ViewStaff from "./Staffs/ViewStaff";
import StaffsList from './StaffsList';

import Home from './Home';
import NavigationBar from './NavigationBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(username, password) {
    // Check if the username and password match the expected values
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
    }
  }

  function handleLogout() {
    // Handle the logout action
    setIsLoggedIn(false);
  }

  return (
    <BrowserRouter>
      <NavigationBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/staffsList" element={<StaffsList />} />
          <Route path="/addStaff" element={<AddStaff />} />
          <Route exact path="/editStaff/:id" element={<EditStaff />} />
          <Route exact path="/viewStaff/:id" element={<ViewStaff />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
