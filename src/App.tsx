import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Assets from 'views/Assets';
import Home from 'views/Home';
import Detail from 'views/Detail';
import NoMatch from 'views/NoMatch';


 function App() {
  return (
            <Router>
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/detail" component={Detail}/>
                <Route path="/assets" component={Assets}/>
                <Redirect exact from="/" to="/home"/>
                <Route path="*" component={NoMatch}/>
              </Switch>
            </Router>
  );
}

export default App

