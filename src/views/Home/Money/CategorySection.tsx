import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  font-size: 18px;
  padding: 3px 0;
  >span{margin-left: 8px}
  .selected{
    border-bottom: 2px solid #000;
  }
`

function CategorySection() {
  return (
          <Wrapper>
            <span className="selected">支出</span>
            <span>收入</span>
          </Wrapper>
  )
}


export  {CategorySection}