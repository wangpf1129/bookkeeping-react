import React from 'react';
import {useParams} from 'react-router-dom'
import {Wrapper} from 'components/Wrapper';
import TopNav from 'components/TopNav';
import Icon from 'components/Icon';

import useTags from 'common/useTags';

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

type Params ={
  id:string
}
const EditTag:React.FC = (props:any)=>{
  const {findTag} = useTags()
  const {id} =useParams<Params>()
  const tag = findTag(parseInt(id))
  return (
          <Wrapper>
            <TopNav name="back" {...props}>
              编辑分类
              {/*{pathname.indexOf('create_tag')>=0?"新建分类":"编辑分类"}*/}
            </TopNav>
            <InputTag>
              <label>
                <Icon name={tag.name}/>
                {/*<input type="text" placeholder={tag.name === "create_tag"?"输入类别名称（不能超过4个字）":tag.name}/>*/}
                <div>{tag.name}</div>
              </label>
            </InputTag>
          </Wrapper>
  )
}

export  {EditTag}