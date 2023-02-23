import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  const [smode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
   
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);
     },1500);
  }
  const toggleMode=()=>{
    if(smode==="light"){

      setmode("dark");
      document.body.style.backgroundColor ='grey';
      showAlert("Dark mode enabled","success");
      
    }
    else{
      setmode("light");
      document.body.style.backgroundColor ='white';
      showAlert("light mode enabled","success")
      
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={smode} toggle={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About />}/>
            
             
          <Route path="/" element={<Textform heading="Enter the Text to analyse" mode={smode} />}/>
          
        </Routes>
        </div>
        </Router>
      
     
    </>
  );
}

export default App;
