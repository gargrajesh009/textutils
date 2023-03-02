import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode  = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0f1b26';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'grey';
    }
  };
  const changeBGColor1 = () =>{
    document.body.style.backgroundColor = 'red';
  }
  const changeBGColor2 = () =>{
    document.body.style.backgroundColor = 'blue';
  }
  const changeBGColor3 = () =>{
    document.body.style.backgroundColor = 'green';
  }
  return (
    <>
    <Navbar toggle={toggleMode} mode={mode} changebg1={changeBGColor1} changebg2={changeBGColor2} changebg3={changeBGColor3}/>
    <div className="container" >
    {/* <Router>
      <Routes>
        <Route path="/about" element={<About />} /> */}
        {/* <Route path="/" element={<TextForm  mode={mode} heading="Please Enter your text here"/>} /> */}
        <TextForm  mode={mode} heading="Please Enter your text here"/>
      {/* </Routes>
    </Router> */}
    </div>
    </>
  );
}

export default App;
