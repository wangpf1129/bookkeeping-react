import React from 'react';
import {WrapperChart} from 'components/WrapperChart';
import {useRecords} from 'hooks/useRecords';
import {ShowMoney} from 'components/ShowMnoey';

// import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import ReactEcharts from 'echarts-for-react';

const ExpensesChart = () => {
  const getOption = () => {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}%'
      },
      series: [
        {
          type: 'pie',
          radius: ['25%', '50%'],
          center: ['50%', '60%'],
          data: [
            {
              value: 335, name: '餐饮',
              itemStyle: {color: '#ec654f'}, label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
            },
            {
              value: 310, name: '娱乐',
              itemStyle: {color: '#f5da6e'}, label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
            },
            {
              value: 234, name: '日用',
              itemStyle: {color: '#efefef'}, label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
            },
            {
              value: 135, name: '果蔬',
              itemStyle: {color: '#fe6d6d'}, label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
            },
            {
              value: 1548, name: '交通',
              itemStyle: {color: '#e4e7f8'}, label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
            }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  };
  const {expensesALL,expenses} = useRecords();

  return (
          <WrapperChart>
            <ShowMoney>
              <span className="title">共支出</span>
              <span className="pay">￥{expensesALL}</span>
              <span className="count">共{expenses.length}条支出项目</span>
            </ShowMoney>
            <ReactEcharts option={getOption()} lazyUpdate={false}/>
          </WrapperChart>
  );
};

export {ExpensesChart};