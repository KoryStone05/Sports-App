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
import NCAABasketball from './NCAABasketball/NCAABasketball';
import NBA from './NBA/NBA';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/'>
        <Home />
      <ul className='links'>
        <Link to='/NBA'>NBA</Link>
        <Link to='/NCAABasketball'>NCAA Men's Basketball</Link>
      </ul>
    </Route>
    <Route path='/NBA'>
      <NBA />
      <ul className='links'>
        <Link to='/'>Home</Link>
        <Link to='/NCAABasketball'>NCAA Men's Basketball</Link>
      </ul>
    </Route>
    <Route path='/NCAABasketball'>
      <NCAABasketball />
      <ul className='links'>
      <li>
        <Link to='/'>Home</Link> 
      </li>
      <li>
        <Link to='/NBA'>NBA</Link> 
      </li>
    </ul>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
