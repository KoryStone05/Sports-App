import React from 'react';
import './App.css';
import Home from './Home/Home';
import NFL from './NFL/NFL';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <div>
      <NFL />
    </div>
  );
}




export default App;
