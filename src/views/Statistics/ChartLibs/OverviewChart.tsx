import React from 'react';
import {WrapperChart} from 'components/WrapperChart';
import Icon from 'components/Icon';
import day from 'dayjs';
import _ from 'lodash';
import {useRecords} from 'hooks/useRecords';

// import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid'
import ReactEcharts from 'echarts-for-react';
import {ShowMoney} from 'components/ShowMnoey';

const OverviewChart = () => {
  const {dayTotalList} = useRecords();
  const getArray = () => {
    const today = new Date();
    const array = [];
    for (let i = 0; i <= parseInt(day(today).format('DD')) - 1; i++) {
      const dateString = day(today).subtract(i, 'day').format('MM/DD');
      // 寻找recordsList中的createdAt和dateString一样的对象
      const foundIncome = _.find(dayTotalList('+'), {title: dateString});
      const foundExpenses = _.find(dayTotalList('-'), {title: dateString});
      array.push({
        key: dateString,
        valuesIncome: foundIncome ? foundIncome.total : 0,
        valuesExpenses: foundExpenses ? foundExpenses.total : 0
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
        data: ['支出', '收入'],
        bottom:0,
        itemWidth:50,
        itemHeight:2
      },
      grid: {
        top: '3%',
        left: '3%',
        right: '4%',
        bottom: '12%',
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
              <span className="titleWrapper">
                <Icon name="chart"/>
                支出和收入
              </span>
            </ShowMoney>
            <ReactEcharts option={getOption()} lazyUpdate={false}/>
          </WrapperChart>
  );
};

export {OverviewChart};