import React, {useState} from 'react';
import styled from 'styled-components';

import TopNav from 'components/TopNav';
import {Wrapper} from 'components/Wrapper';

import {CategorySection} from './section/CategorySection';
import {TagsSection} from './section/TagsSection';
import {KeyboardSection} from './section/KeyboardSection';


const Main = styled.div`
  background-color:#fafbf6;
  flex: 1;
  overflow: auto;
`;

type Category = "-" | "+"

const Money:React.FC =()=> {
  const [selected,setSelected] = useState({
    tagIds:[] as number[], // 标签
    note:"",  // 备注
    category:"-" as Category, // 收入/支出
    amount:0  // 总和
  })
  const onChange = (obj:Partial<typeof selected>)=>{
    setSelected({
            ...selected,
            ...obj
    })
  }
  return (
          <Wrapper>
            <TopNav name="back">
              <CategorySection value={selected.category}
                               onChange={(category)=>{onChange({category})}}
              />
            </TopNav>
            <Main>
              {/*{selected.category}*/}
              {/*<hr/>*/}
              {/*{selected.tagIds.join('.')}*/}
              {/*<hr/>*/}
              {/*{selected.note}*/}
              {/*<hr/>*/}
              {/*{selected.amount}*/}

              <TagsSection value={selected.tagIds}
                           onChange={(tagIds)=>{onChange({tagIds})}}
              />

            </Main>
            <KeyboardSection note={selected.note} amount = {selected.amount}
                             onChangeNote={(note)=>{onChange({note})}}
                             onChangeAmount ={(amount)=>{onChange({amount})}}
                             onOk={()=>{}}
            />
          </Wrapper>
  );
}

export default Money;