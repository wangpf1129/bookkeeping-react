import React from 'react';
import {Wrapper} from 'components/Wrapper';
import TopNav from 'components/TopNav';
import Icon from 'components/Icon';

import styled from 'styled-components';


const InputTag= styled.section`
  padding: 12px 16px;
  > label{
    display: flex;
    align-items: center;
    > input {
      flex: 1;
      border: none;
      border-bottom: 2px solid #000;
      outline: none;
      padding: 10px 0;
      margin: 0 12px;
      font-size: 16px;
    }
    .icon{
      margin-right: 10px;
      width: 38px;
      height: 38px;
    }
    
  }
  
`
const EditTag:React.FC = (props:any)=>{
  console.log(props);
  const {location:{pathname}} = props
  const arr =pathname.split('/')
  const tag = arr[arr.length-1]
  return (
          <Wrapper>
            <TopNav name="back" {...props}>
              {pathname.indexOf('create_tag')>=0?"新建分类":"编辑分类"}
            </TopNav>
            <InputTag>
              <label>
                <Icon name={tag}/>
                <input type="text" placeholder={tag === "create_tag"?"输入类别名称（不能超过4个字）":tag}/>
              </label>
            </InputTag>
          </Wrapper>
  )
}

export  {EditTag}