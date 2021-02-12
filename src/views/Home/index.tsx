import React from 'react';
import Layout from 'components/Layout';
import {MoneyLink} from 'components/MoneyLink/MoneyLink';
import styled from 'styled-components';
import {useRecords} from 'hooks/useRecords';
import day from 'dayjs';

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
            <MoneyLink/>
          </Layout>
  );
};

export default Home;