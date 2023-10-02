import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";

function App(){
  const { user } = useAuthContext()
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return(
    <div className="App">
      <BrowserRouter>
      <Navbar mode = {mode} toggleMode={toggleMode}/>
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={user ? <Home/>: <Navigate to="/login" />}
            />
            <Route 
              path="/signup"
              element={!user ? <Signup/>: <Navigate to="/" />}
            />            
            <Route 
              path="/login"
              element={!user ? <Login/>: <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;