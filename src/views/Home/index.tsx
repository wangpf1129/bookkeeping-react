import Layout from 'components/Layout';
import React from 'react';
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import Money from './Money';
import styled from 'styled-components';


const MoneyLink = styled.div`
 margin: 28px auto 0;
 background-color:#A1DECF;
 font-size: 18px;
 font-weight: 700;
 border-radius: 10px;
 padding: 14px;
 max-width: 141px;
 text-align: center;
`;
const ShowMoney = styled.div`
  margin-top: 94px; 
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span{ padding: 5px; font-weight: 700;}
  .title{
    color: #81B7AA;
  }
  .pay{
    font-size: 28px;
    color: #81B7AA;
  }
  .income{
    color: #B7B7B7;
    font-size: 16px;
  }
`;


function Home() {
  let {path, url} = useRouteMatch();
  return (
          <Layout name="TODAY">
            <ShowMoney>
              <span className="title">今日支出</span>
              <span className="pay">￥ 18</span>
              <span className="income">收入 ￥0</span>
            </ShowMoney>
            <MoneyLink>
              <Link to={`${url}/money`}>记一笔</Link>
            </MoneyLink>
            <Switch>
              <Route path={`${path}/:money`} component={Money}/>
            </Switch>
          </Layout>
  );
}

export default Home;