import {CategorySection} from 'views/Home/Money/section/CategorySection';
import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 12px;
  margin-bottom: 22px;
  display: flex;
  justify-content: center;
  span{
    padding: 8px 24px;
    font-size: 18px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .selected{
    background-color:#9ccac0;
    color: white;
    border-radius: 4px;
  }
`


const  TypeSection  = ()=>{
  const [category,setCategory] = useState<"-"|"+">('-')
  return (
         <Wrapper>
           {/*<span className="selected">收入</span>*/}
           {/*<span>支出</span>*/}
           <CategorySection value={category}
                            onChange={value=>setCategory(value)}
           />
         </Wrapper>
 )
}

export {TypeSection}