import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react'
import Alert from './Components/Alert';
/*
** import statements for Route
*/
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')

  /* useState */  
  const [alert, setAlert] = useState(null)

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-light')
  }

  /* Function */
  const toggleMode = (cls)=> {
    removeBodyClasses()
    document.body.classList.add('bg-'+cls);
    showAlert(cls + ' mode has been enabled', 'Success')
    /*
    ** Code when you had toggle button
    if(mode === 'light'){
      
      document.body.style.backgroundColor = '#ced4da'
      setMode('dark');
      showAlert(cls + ' Mode has been enabled', 'Success')
      document.title = 'TextUtils - DarkMode'
    }
    else{     
      
      document.body.style.backgroundColor = 'white'
      setMode('light')
      showAlert('Light Mode has been enabled', 'Success')
      document.title = 'TextUtils - LightMode'
    }
    */
  }

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type,
      })

      setTimeout(() => {
        setAlert(null)
      }, 2000)
  }

  return ( 
    /*
    //JSX fragment
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
    </nav>
    <div className="blank">
      Hello <b>{name}</b>
    </div>
    </>
    
    */
    <>   
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils"/>
    <Alert alert = {alert}/>
    <div className="container">
      <Routes>
        <Route exact path="/TextUtils/about" element = {<About mode={mode}/>} />
        <Route exact path="/TextUtils" element = {<TextForm heading = "Enter text to analyze" showAlert={showAlert}/>} />                         
      </Routes>
    </div>
    </Router>  
    </>

  );
}

export default App;
