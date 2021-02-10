import React from 'react';
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
    border: none;
    color: white;
    border-radius: 4px;
  }
`;

const TypeSection:React.FC = (props:any)  => {

  return (
            <Wrapper>
              {props.children}
            </Wrapper>
  );
};
export {TypeSection};

