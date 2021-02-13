import React from 'react';
import {WrapperChart} from 'components/WrapperChart';
import day from 'dayjs';
import _ from 'lodash';
import {useRecords} from 'hooks/useRecords';

// import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import ReactEcharts from 'echarts-for-react';
import {ShowMoney} from 'components/ShowMnoey';

const OverviewChart = () => {
  const {records} = useRecords();

  const getArray = () => {
    const recordsList = records.map(r =>
            ({createdAt: day(r.createdAt).format('DD'), amount: r.amount, category: r.category}));
    const today = new Date();
    const array = [];
    for (let i = 0; i <= parseInt(day(today).format('DD')) - 1; i++) {
      const dateString = day(today).subtract(i, 'day').format('DD');
      // 寻找recordsList中的createdAt和dateString一样的对象
      const foundIncome = _.find(recordsList, {createdAt: dateString, category: '+'});
      const foundExpenses = _.find(recordsList, {createdAt: dateString, category: '-'});
      array.push({
        key: dateString,
        valuesIncome: foundIncome ? foundIncome.amount : 0,
        valuesExpenses: foundExpenses ? foundExpenses.amount : 0
      });
    }
    array.sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      } else if (a.key === b.key) {
        return 0;
      } else {
        return -1;
      }
    });
    return array;
  };
  const getOption = () => {
    const keys = getArray().map(item => item.key);
    const valuesIncome = getArray().map(item => item.valuesIncome);
    const valuesExpenses = getArray().map(item => item.valuesExpenses);
    return {
      tooltip: {
        trigger: 'axis',
        lineStyle: 'line'
      },
      legend: {
        data: ['支出', '收入']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: keys
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '支出',
          type: 'line',
          stack: '总量',
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#9bcac0'
          },
          areaStyle: {color: '#9bcac0'},
          itemStyle: {
            color: '#9bcac0',
            borderWidth: 2
          },
          symbol: 'circle',
          symbolSize: 8,
          data: valuesExpenses
        },
        {
          name: '收入',
          type: 'line',
          stack: '总量',
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#ffa1a0'
          },
          areaStyle: {color: '#ffa1a0'},
          itemStyle: {
            color: '#ffa1a0',
            borderWidth: 2
          },
          symbol: 'circle',
          symbolSize: 8,
          data: valuesIncome
        }
      ]
    };

  };

  return (
          <WrapperChart>
            <ShowMoney>
              <span className="title">总收入</span>
              <span className="pay">￥123</span>
            </ShowMoney>
            <ReactEcharts option={getOption()} lazyUpdate={false}/>
          </WrapperChart>
  );
};

export {OverviewChart};