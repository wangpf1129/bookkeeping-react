import styled from 'styled-components';
import Icon from 'components/Icon';
import React from 'react';

const Wrapper = styled.section`
   padding: 20px 38px;   
   >ol {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-right: -24px;
    >li{
      background-color:#eee;
      border-radius: 10px;
      padding: 10px;
      margin-top: 24px;
      margin-right: 12px;
      display:flex;
      flex-direction: column;
      text-align: center;
      font-size: 12px;
      >span{padding-top: 5px}
      .icon{
        width: 28px;
        height: 28px;
        fill:rgba(0,0,0,.6)
      }
    }
    .active{
      background-color:#a1ddd4;
    } 
  }
`;


function TagsSection() {
return (
        <Wrapper>
          <ol>
            <li className="active">
              <Icon name="eat"/>
              <span>餐饮</span>
            </li>
            <li>
              <Icon name="play"/>
              <span>娱乐</span>
            </li>
            <li>
              <Icon name="daily"/>
              <span>日用</span>
            </li>
            <li>
              <Icon name="chat"/>
              <span>通讯</span>
            </li>
            <li>
              <Icon name="fruits"/>
              <span>果蔬</span>
            </li>
            <li>
              <Icon name="traffic"/>
              <span>交通</span>
            </li>
            <li>
              <Icon name="add"/>
              <span>添加</span>
            </li>
          </ol>
        </Wrapper>
)
}
export {TagsSection}