import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)
  const toggleMode = ()=> {
    if(mode === 'light'){
      
      setMode('dark');
      showAlert('Dark Mode has been enabled', 'Success')
      document.title = 'TextUtils - DarkMode'
    }
    else{
      setMode('light')
      showAlert('Light Mode has been enabled', 'Success')
      document.title = 'TextUtils - LightMode'
    }
  }

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null)
      }, 2000)
  }

  return (
    
    //JSX fragment
    /*<>
    <nav>
      <li>Home</li>
      <li>About</li>
    </nav>
    <div className="blank">
      Hello <b>{name}</b>
    </div>
    </>*/
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils"/>
    <Alert alert = {alert}/>
    <div className="container">
      <Routes>
            <Route exact path="/about" element = {<About />} />
            <Route exact path="/" element = {<TextForm heading = "Enter text to analyze" showAlert={showAlert}/>} />               
    </Routes>
   </div>
    </Router>
    
    </>

  );
}

export default App;
