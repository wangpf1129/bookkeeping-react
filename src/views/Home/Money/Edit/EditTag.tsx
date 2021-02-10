import React, {useRef, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {Wrapper} from 'components/Wrapper';
import TopNav from 'components/TopNav';
import Icon from 'components/Icon';

import useTags from 'hooks/useTags';
import {defaultIcon} from 'common/iconsLib';

import styled from 'styled-components';
import {TypeSection} from '../../../../components/TypeSection';
import {CategorySection} from '../section/CategorySection';


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
`;
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
    .selected{
      background-color:#9CCAC0;
      color: #fff;
    }
 }


`;
type Params = {
  id: string
}
const EditTag: React.FC = (props: any) => {
  const [iconName, setIconName] = useState('9999');
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {findTag, updateTag, deleteTag, addTag} = useTags();
  const history = useHistory();
  const {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString)) || '';
  const inputRef = useRef<HTMLInputElement>(null);
  // 修改标签
  const saveTag = () => {
    if (inputRef.current !== null && inputRef.current.value !== '' && inputRef.current.value.trim().length <= 4) {
      let newIconName = iconName !== '9999' ? iconName : tag.iconName;
      updateTag(tag.id, {name: inputRef.current.value.trim().substring(0, 4), iconName: newIconName}, tag.mold);
      window.alert('修改成功');
      history.goBack();
    } else {
      window.alert('不能输入空的标签以及输入的汉字不能超过四个！');
    }
  };
  console.log(category);

  // 添加标签
  const addNewTag = () => {
    if (inputRef.current !== null && inputRef.current.value !== '' && inputRef.current.value.trim().length <= 4) {
      addTag(inputRef.current.value.trim().substring(0, 4), iconName, category);
      window.alert('添加成功');
      history.goBack();
    } else {
      window.alert('不能输入空的标签以及输入的汉字不能超过四个！');
    }
  };
  // 删除标签
  const deleteOneTag = () => {
    if (inputRef.current !== null) {
      deleteTag(tag.id);
      alert('删除成功');
      history.goBack();
    }
  };
  const getIcon = (iconName: string) => {
    setIconName(iconName);
  };

  return (
          <Wrapper>
            <TopNav name="back" {...props}>
              {idString === '9999' ? '新建分类' : '编辑分类'}
            </TopNav>
            <InputTag>
              {idString === '9999' ?
                      <>
                        <TypeSection>
                          <CategorySection value={category}
                                           onChange={value => setCategory(value)}
                          />
                        </TypeSection>
                        <label>
                          <Icon name={iconName}/>
                          <input type="text"
                                 placeholder="请输入分类类型(不超过四个字)"
                                 defaultValue=""
                                 ref={inputRef}/>
                        </label>
                      </>
                      : <label>
                        <Icon name={iconName === '9999' ? tag.iconName : iconName}/>
                        <input type="text"
                               placeholder={tag.name}
                               defaultValue={tag.name}
                               ref={inputRef}/>
                      </label>

              }
            </InputTag>
            <IconList>
              <ul>
                {
                  defaultIcon.map((item) => {
                    return (<li key={item.id} onClick={() => getIcon(item.iconName)}>
                      <Icon name={item.iconName}/>
                    </li>);
                  })
                }
              </ul>
            </IconList>
            {idString === '9999' ?
                    <Button>
                      <button className="save" onClick={addNewTag}>添加新标签</button>
                    </Button>
                    :
                    <Button>
                      <button className="save" onClick={saveTag}>保存标签</button>
                      <button className="delete" onClick={deleteOneTag}>删除标签</button>
                    </Button>
            }
          </Wrapper>
  );
};

export {EditTag};


