
import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const blacktoggleMode = () => {
    if (mode === 'light') {
      setmode('dark');

      document.body.style.backgroundColor = 'rgb(8, 11, 54)';
      showalert("Dark Mode has been enabled", "success");
    }
    else {
      setmode('light');

      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enabled", "success");
    }
  }

  const redtoggleMode = () => {
    if (mode === 'light') {
      setmode('red');

      document.body.style.backgroundColor = 'rgb(148, 24, 24)';
      showalert("Red Dark Mode has been enabled", "success");
    }
    else {
      setmode('light');

      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enabled", "success");
    }
  }

  return (
    <><Navbar title="TextUtils" mode={mode} blacktoggleMode={blacktoggleMode} redtoggleMode={redtoggleMode} hometext="About" />
      <Alert alert={alert} />
      <Textform showalert={showalert} heading="Enter Your text to analyze" mode={mode} />
    </>
    // <Router>
    //   <Navbar title="TextUtils" mode={mode} blacktoggleMode={blacktoggleMode} redtoggleMode={redtoggleMode} hometext="About" />
    //   <Alert alert={alert} />

    //   <Routes>
    //     <Route path="/" element={<Textform showalert={showalert} heading="Enter Your text to analyze" mode={mode} />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>

    //   <div className="container my-3">
    //     {/* Your other components or content here */}
    //   </div>
    // </Router>
  );
}


export default App;
