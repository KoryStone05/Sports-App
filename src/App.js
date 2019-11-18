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
    </Route>
    <Route path='/NBA'>
      <NBA />
      <ul className='nbaGames NCAASeason links'>
        <Link to='/'>Home</Link>
        <Link to='/NBA'>NBA</Link>
        <Link to='/NCAABasketball'>NCAA Men's Basketball</Link>
    </ul>
    </Route>
    <Route path='/NCAABasketball'>
      <NCAABasketball />
      <ul className='nbaGames NCAASeason links'>
        <Link to='/'>Home</Link>
        <Link to='/NBA'>NBA</Link>
        <Link to='/NCAABasketball'>NCAA Men's Basketball</Link>
    </ul>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
