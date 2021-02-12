import React, {useState} from 'react';
import {Chart} from 'components/Chart/Chart';
import {WrapperChart} from 'components/WrapperChart';
import {useRecords} from 'hooks/useRecords';
import {ShowMoney} from 'components/ShowMnoey';


const ExpensesChart = () => {
  const [option] = useState({
    title: {text: '哈哈哈'},
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
  });
  const {incomeAll} = useRecords();

  return (
          <WrapperChart>
            <ShowMoney>
              <Chart option={option}/>
              <span className="title">共支出</span>
              <span className="pay">￥{incomeAll}</span>
            </ShowMoney>
          </WrapperChart>
  );
};

export {ExpensesChart};