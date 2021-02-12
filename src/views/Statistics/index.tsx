import React, {useState} from 'react';
import Layout from 'components/Layout';
import {Chart} from 'components/Chart/Chart';
import styled from 'styled-components';


const ChartWrapper = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;
const Statistics: React.FC = () => {
  const [option] = useState({
    title: {
      text: '概览'
    },
    tooltip: {
      trigger: 'axis',
      lineStyle:'line'
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
        data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14']
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
        smooth:true,
        lineStyle:{
          width:3,
          color:'#9bcac0'
        },
        areaStyle: {color:'#9bcac0'},
        itemStyle:{
          color:'#9bcac0',
          borderWidth:2
        },
        symbol:'circle',
        symbolSize:8,
        data: [220, 182, 191, 234, 290, 330, 310,222, 191, 234, 290, 330, 310,901, 934]
      },
      {
        name: '收入',
        type: 'line',
        stack: '总量',
        smooth:true,
        lineStyle:{
          width:3,
          color:'#ffa1a0'
        },
        areaStyle: {color:'#ffa1a0'},
        itemStyle:{
          color:'#ffa1a0',
          borderWidth:2
        },
        symbol:'circle',
        symbolSize:8,
        data: [820, 932, 901, 934, 1290, 1330, 1320 ,934, 1290, 1330, 1320, 934, 1290, 1330]
      }
    ]
  });

  return (
          <Layout name="统计">
            <ChartWrapper>
              <Chart option={option}/>
            </ChartWrapper>
          </Layout>
  );
};

export default Statistics;