import React, {useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Wrapper} from 'components/Wrapper';
import TopNav from 'components/TopNav';
import Icon from 'components/Icon';

import useTags from 'common/useTags';
import {defaultIcon} from 'common/iconsLib';


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
const IconList = styled.section`
  flex: 1;
  overflow-y: auto;
  ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    li{
      padding: 20px;
      > .icon{
        width: 38px;
        height: 38px;
      }
    }
  }
`
const Button = styled.section`
padding-top: 20px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-bottom: 10px;
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

  const [iconName,setIconName] =useState("9999")

  const {findTag,updateTag,deleteTag} = useTags();
  const {id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));

  const inputRef = useRef<HTMLInputElement>(null)
  const saveTag = ()=>{
    if(inputRef.current !== null){
      updateTag(tag.id,{name:inputRef.current.value.trim(),iconName})
    }
  }
  const deleteOneTag = ()=>{
    if(inputRef.current !== null){
      deleteTag(tag.id)
    }
  }
  const getIcon = (iconName:string) =>{
    setIconName(iconName)
  }

  return (
          <Wrapper>
            <TopNav name="back" {...props}>
              {idString === '9999' ? '新建分类' : '编辑分类'}
            </TopNav>
            <InputTag>
              {idString === '9999' ? <label>
                        <Icon name={iconName}/>
                        <input type="text"
                               placeholder="请输入分类类型(不超过四个字)"
                               defaultValue=""
                               ref ={inputRef}/>
                      </label>
                      : <label>
                        <Icon name={iconName === "9999" ? tag.iconName : iconName}/>
                        <input type="text"
                               placeholder={tag.name}
                               defaultValue={tag.name}
                               ref ={inputRef}/>
                      </label>
              }
            </InputTag>
            <IconList>
              <ul>
                {
                  defaultIcon.map((item)=>{
                    return (
                            <li key={item.id} onClick={()=>getIcon(item.iconName)}>
                              <Icon name={item.iconName}/>
                            </li>
                    )
                  })
                }
                {
                  defaultIcon.map((item)=>{
                    return (
                            <li key={item.id} onClick={()=>getIcon(item.iconName)}>
                              <Icon name={item.iconName}/>
                            </li>
                    )
                  })
                }
              </ul>
            </IconList>
            <Button>
              <button className="save" onClick={saveTag}>保存标签</button>
              {idString !== '9999' && <button className="delete" onClick={deleteOneTag}>删除标签</button>}
            </Button>
          </Wrapper>
  );
};

export {EditTag};


