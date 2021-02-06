import React, {useRef} from 'react';
import {useParams} from 'react-router-dom';
import {Wrapper} from 'components/Wrapper';
import TopNav from 'components/TopNav';
import Icon from 'components/Icon';

import useTags from 'common/useTags';

import styled from 'styled-components';


const InputTag = styled.section`
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
  
`;

type Params = {
  id: string
}
const EditTag: React.FC = (props: any) => {
  const {findTag,updateTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(parseInt(id));

  const inputRef = useRef<HTMLInputElement>(null)
  const onBlur = ()=>{
    if(inputRef.current !== null){
      // console.log(inputRef.current.value.trim());
      updateTag(tag.id,{name:inputRef.current.value.trim()})
    }
  }
  return (
          <Wrapper>
            <TopNav name="back" {...props}>
              {id === '9999' ? '新建分类' : '编辑分类'}
            </TopNav>
            <InputTag>
              {id === '9999' ? <label>
                        <Icon name="9999"/>
                        <input type="text"
                               placeholder="请输入分类类型(不超过四个字)"
                               defaultValue=""
                               ref ={inputRef}
                               onBlur={onBlur}/>
                      </label>
                      : <label>
                        <Icon name={(tag.id).toString()}/>
                        <input type="text"
                               placeholder={tag.name}
                               defaultValue={tag.name}
                               ref ={inputRef}
                               onBlur={onBlur}/>
                      </label>
              }
            </InputTag>
          </Wrapper>
  );
};

export {EditTag};


