import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Layout from './components/Layout';

export default function App() {
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

function Home() {
  return (
          <Layout>
            <h2>TODAY</h2>
          </Layout>
  );
}

function Statistics() {
  return (
          <Layout>
            <h2>统计页面</h2>
          </Layout>
  );
}

function Assets() {
  return (
          <Layout>
            <h2>资产页面</h2>
          </Layout>
  );
}

function NoMatch() {
  return (
          <div>
            <h3>
              404，页面找不到！
            </h3>
          </div>
  );
}