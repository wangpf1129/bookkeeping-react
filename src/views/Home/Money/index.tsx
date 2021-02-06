import React, {useState} from 'react';
import styled from 'styled-components';

import TopNav from 'components/TopNav';
import {Wrapper} from 'components/Wrapper';

import {CategorySection} from './CategorySection';
import {TagsSection} from './TagsSection';
import {KeyboardSection} from './KeyboardSection';


const Main = styled.div`
   background-color:#fafbf6;
  flex: 1;
  overflow: auto;
`;

type Category = "-" | "+"

function Money(props: any) {
  const [selected,setSelected] = useState({
    tags:[] as string[], // 标签
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
            <TopNav name="back" {...props}>
              <CategorySection value={selected.category}
                               onChange={(category)=>{onChange({category})}}
              />
            </TopNav>
            <Main>
              {selected.category}
              <hr/>
              {selected.tags.join('.')}
              <hr/>
              {selected.note}
              <hr/>
              {selected.amount}
              <TagsSection value={selected.tags}
                           onChange={(tags)=>{onChange({tags})}}
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