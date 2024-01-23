 import React from 'react';
 import { BrowserRouter as Routes, Route } from 'react-router-dom';
 import Forms from './components/Forms/Forms';
import './styles.css';

function App() {
  return (
    <div>
       <div className="bubble-container">
        <div className="bubble" style={{ top: '50%', left: '50%', width: '20px', height: '20px' }}></div>
        <div className="bubble big-bubble"></div>
        <div className="left-bottom-bubble"></div>
        <div className="small-top-bubble"></div>
      </div>
      <Forms />
    </div>
  );
}

export default App;

