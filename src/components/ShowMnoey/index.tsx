import styled from 'styled-components';
import React, {PropsWithChildren} from 'react';

const Wrapper = styled.div`
  margin-top: 94px; 
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span{ padding: 5px; font-weight: 700;}
  .title{
    color: #81B7AA;
  }
  .pay{
    font-size: 28px;
    color: #81B7AA;
  }
  .count{
    margin-top: 10px;
    font-size: 18px;
    color: rgba(185, 186, 184,0.9);
    padding:10px 16px;
    background-color:#f9faf5;
    border-radius: 8px;
  }
  .income{
    margin-top: 15px;
    color: #B7B7B7;
    font-size: 16px;
  }
`;

const  ShowMoney = (props:PropsWithChildren<any>)=>{
  return (
          <Wrapper>
            {props.children}
          </Wrapper>
  )
}

export {ShowMoney}