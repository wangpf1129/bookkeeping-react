import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Assets from 'views/Assets';
import Home from 'views/Home';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch';


 function App() {
  return (
          <Router>
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/statistics" component={Statistics}/>
              <Route path="/assets" component={Assets}/>
              <Redirect exact from="/" to="/home"/>
              <Route path="*" component={NoMatch}/>
            </Switch>
          </Router>
  );
}

export default App

