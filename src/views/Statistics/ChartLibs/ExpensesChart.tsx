import React from 'react';
import {WrapperChart} from 'components/WrapperChart';
import {useRecords} from 'hooks/useRecords';
import {ShowMoney} from 'components/ShowMnoey';

// import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import ReactEcharts from 'echarts-for-react';
import useTags from '../../../hooks/useTags';
import {getData} from '../../../common/getData';

const ExpensesChart = () => {
  const {expensesALL, expenses} = useRecords();
  const {getName} = useTags();

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
          data:getData(expenses,expensesALL,getName),
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