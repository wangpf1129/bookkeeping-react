import React, {useState} from 'react';
import {Link, Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import {OverviewChart} from './ChartLibs/OverviewChart';
import {ExpensesChart} from './ChartLibs/ExpensesChart';
import {IncomeChart} from './ChartLibs/IncomeChart';
import Layout from 'components/Layout';
import styled from 'styled-components';

const Wrapper = styled.section`
  > ul {
    display:flex;
    justify-content: center;
    > li {
      margin: 4px 8px;
      padding: 10px 24px;
      background-color:#fff;
      color: #000;
      border-radius: 10px;
      &.selected{
        background-color:#9ccac0;
        color: #fff;
      }
    }
  }
`;
const Statistics: React.FC = () => {
  let {path, url} = useRouteMatch();
  const [text, setText] = useState('概览');
  const onclick = (newText:string)=>{
    setText(newText)
  }
  return (
          <Layout name="统计">
            <Wrapper>
              <ul>
                <li className={text === '概览' ? 'selected' : ''} onClick={()=>{onclick('概览')}}>
                  <Link to={`${url}/overview`}>概览</Link>
                </li>
                <li className={text === '支出' ? 'selected' : ''} onClick={()=>{onclick('支出')}}>
                  <Link to={`${url}/expenses`}>支出</Link>
                </li>
                <li className={text === '收入' ? 'selected' : ''} onClick={()=>{onclick('收入')}}>
                  <Link to={`${url}/income`}>收入</Link>
                </li>
              </ul>
            </Wrapper>
            <Switch>
              <Route path={`${path}/overview`} component={OverviewChart}/>
              <Route path={`${path}/expenses`} component={ExpensesChart}/>
              <Route path={`${path}/income`} component={IncomeChart}/>
              <Redirect exact from="/statistics" to={`${url}/overview`}/>
            </Switch>
          </Layout>
  );
};

export default Statistics;