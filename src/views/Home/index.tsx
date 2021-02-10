import Layout from 'components/Layout';
import React from 'react';
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import Money from './Money';
import styled from 'styled-components';
import {useRecords} from '../../hooks/useRecords';
import day from 'dayjs';

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
    margin-top: 15px;
    color: #B7B7B7;
    font-size: 16px;
  }
`;


const Home: React.FC = () => {
  let {path, url} = useRouteMatch();
  const {incomeMoney, expensesMoney} = useRecords();
  const today = day(new Date()).format('DD');
  const mouth = day(new Date()).format('MM');
  const income = incomeMoney(today);
  const expenses = expensesMoney(mouth);
  return (
          <Layout name="TODAY">
            <ShowMoney>
              <span className="title">今日支出</span>
              <span className="pay">￥{income.reduce((preMoney, amount) => {
                return preMoney += amount;
              }, 0)}</span>
              <span className="income">本月收入 ￥{expenses.reduce((preMoney, amount) => {
                return preMoney += amount;
              }, 0)}</span>
            </ShowMoney>
            <MoneyLink>
              <Link to={`${url}/money`}>记一笔</Link>
            </MoneyLink>
            <Switch>
              <Route path={`${path}/:money`} component={Money}/>
            </Switch>
          </Layout>
  );
};

export default Home;