import React, {useRef} from 'react';
import {useParams} from 'react-router-dom';
import {Wrapper} from 'components/Wrapper';
import TopNav from 'components/TopNav';
import Icon from 'components/Icon';

import useTags from 'common/useTags';

import styled from 'styled-components';


const InputTag = styled.section`
  flex: 1;
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
const Button = styled.section`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-bottom: 40px;
 > button{
    outline: none;
    font-size: 16px;
    border-radius: 4px;
    padding: 10px 24px;
    margin: 0 24px;
    &.save{
      border: 1px solid #9CCAC0;
      background-color:#fff;
    }
    &.delete{
      border: 1px solid #FFFFFF;
      background-color:#9CCAC0;
      color: red;
    }
 }


`
type Params = {
  id: string
}
const EditTag: React.FC = (props: any) => {
  const {findTag,updateTag,deleteTag} = useTags();
  const {id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));

  const inputRef = useRef<HTMLInputElement>(null)
  const saveTag = ()=>{
    if(inputRef.current !== null){
      // console.log(inputRef.current.value.trim());
      updateTag(tag.id,{name:inputRef.current.value.trim()})
    }
  }
  const deleteOneTag = ()=>{
    if(inputRef.current !== null){
      // console.log(inputRef.current.value.trim());
      deleteTag(tag.id)
    }
  }
  return (
          <Wrapper>
            <TopNav name="back" {...props}>
              {idString === '9999' ? '新建分类' : '编辑分类'}
            </TopNav>
            <InputTag>
              {idString === '9999' ? <label>
                        <Icon name="9999"/>
                        <input type="text"
                               placeholder="请输入分类类型(不超过四个字)"
                               defaultValue=""
                               ref ={inputRef}/>
                      </label>
                      : <label>
                        <Icon name={(tag.id).toString()}/>
                        <input type="text"
                               placeholder={tag.name}
                               defaultValue={tag.name}
                               ref ={inputRef}/>
                      </label>
              }
            </InputTag>
            <Button>
              <button className="save" onClick={saveTag}>保存标签</button>
              {idString !== '9999' && <button className="delete" onClick={deleteOneTag}>删除标签</button>}
            </Button>
          </Wrapper>
  );
};

export {EditTag};


