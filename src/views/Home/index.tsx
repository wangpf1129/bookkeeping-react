import React from 'react';
import Layout from 'components/Layout';
import {MoneyLink} from 'components/MoneyLink/MoneyLink';
import {ShowMoney} from 'components/ShowMnoey';
import {useRecords} from 'hooks/useRecords';
import day from 'dayjs';


const Home: React.FC = () => {

  const {incomeMoney, expensesMoney} = useRecords();
  const today = day(new Date()).format('DD');
  const mouth = day(new Date()).format('MM');
  const expenses = expensesMoney(today);
  const income = incomeMoney(mouth);

  return (
          <Layout  name="TODAY">
            <ShowMoney>
              <span className="title">今日支出</span>
              <span className="pay">￥{expenses.reduce((preMoney, amount) => {
                return preMoney += amount;
              }, 0)}</span>
              <span className="income">本月收入 ￥{income.reduce((preMoney, amount) => {
                return preMoney += amount;
              }, 0)}</span>
            </ShowMoney>
            <MoneyLink/>
          </Layout>
  );
};

export default Home;