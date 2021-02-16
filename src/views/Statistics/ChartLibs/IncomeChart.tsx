import React from 'react';
import {WrapperChart} from 'components/WrapperChart';
import {ShowMoney} from 'components/ShowMnoey';
import {useRecords} from 'hooks/useRecords';
import useTags from 'hooks/useTags';
import {getData} from 'common/getData';

// import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip';
import ReactEcharts from 'echarts-for-react';



const IncomeChart = () => {
  const {incomeAll,income} = useRecords();
  const {getName} = useTags();
  const getOption = ()=>{
   return  {
     tooltip: {
       trigger: 'item',
       formatter: '{b} : {d}%'
     },
     series: [
       {
         type: 'pie',
         radius: '55%',
         center: ['50%', '60%'],
         // data: [
         //   {
         //     value: 335, name: '工资',
         //     itemStyle: {color: '#bbdfd9'}, label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
         //   },
         //   {
         //     value: 310, name: '理财',
         //     itemStyle: {color: '#e2f0f0'}, label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
         //   },
         //   {
         //     value: 234, name: '副业',
         //     itemStyle: {color: '#f5fbf9'}, label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
         //   },
         // ],
         data:getData(income,incomeAll,getName),
         emphasis: {
           itemStyle: {
             shadowBlur: 10,
             shadowOffsetX: 0,
             shadowColor: 'rgba(0, 0, 0, 0.5)'
           }
         }
       }
     ]
   }
 }
  return (
          <WrapperChart>
            <ShowMoney>
              <span className="title">总收入</span>
              <span className="pay">￥{incomeAll}</span>
              <span className="count">共{income.length}条收入项目</span>
            </ShowMoney>
            <ReactEcharts option={getOption()} lazyUpdate={false}/>
          </WrapperChart>
  );
};

export {IncomeChart};