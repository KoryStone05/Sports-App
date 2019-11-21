import React from 'react';
import './App.css';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import NCAABasketball from './NCAABasketball/NCAABasketball';
import NBA from './NBA/NBA';
import NFL from './NFL/NFL';



function App() {
  return (
   
    <Router>
      <Switch>
      <Route exact path='/'>
        <Home />
      <div className='links'>
        <Link to='/NFL'>NFL</Link>
      </div>
    </Route>
    <Route path='/NBA'>
      <NBA />
      <div className='links'>
        <Link to='/'>Home</Link>
        
      </div>
    </Route>
      <Route path='/NFL'>
        <NFL />
      <div className='links'>
        
          <Link to='/'>Home</Link>
      
      </div>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
