import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';

import Nav from 'components/Nav'

const Wrapper =styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex: 1;
  overflow: auto;
`


export default function App() {
  return (
          <Router>
            <Wrapper>
              <Main>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/statistics" component={Statistics}/>
                <Route path="/assets" component={Assets} />
                <Redirect from="/" to="/home" />
                <Route path="*" component={NoMatch} />
              </Switch>
              </Main>
              <Nav />
            </Wrapper>
          </Router>
  );
}

function Home() {
  return <h2>TODAY</h2>;
}

function Statistics() {
  return <h2>统计</h2>;
}

function Assets() {
  return <h2>资产</h2>;
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