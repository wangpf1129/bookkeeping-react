import React, {useState} from 'react';
import {Chart} from 'components/Chart/Chart';
import {WrapperChart} from 'components/WrapperChart';


const IncomeChart = () => {
  const [option] = useState( {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {d}%'
    },
    series: [
      {
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          {
            value: 335, name: '工资',
            itemStyle: {color: '#bbdfd9'}, label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
          },
          {
            value: 310, name: '理财',
            itemStyle: {color: '#e2f0f0'}, label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
          },
          {
            value: 234, name: '副业',
            itemStyle: {color: '#f5fbf9'}, label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
          },
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

  return (
          <WrapperChart>
            <Chart option={option}/>
          </WrapperChart>
  );
};

export {IncomeChart};