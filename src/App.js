import React, { useState } from 'react';
import './App.css';
import Login from './Component/Login';
import Todo from './Component/Todo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Component/Navbar';
import { Register } from './Component/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [signOut, setsignOut] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar signOut={signOut}/>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Register />} />
          <Route path="todo" element={<Todo signout={setsignOut}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
