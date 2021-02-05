import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  padding: 10px 20px;
  > section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-right: -38px;
   > button{
   background-color:#fff;
   font-weight: 600;
   font-size: 24px;
   border-radius: 10px;
   margin-right: 12px;
   width: 20%;
   height: 40px;
   border: 1px solid #000;
   margin-bottom: 12px;
     &.today{
      background-color:#f0aa9f;
     }
     &.complete{
      background-color:#eec511;
     }
   }
  }
`;


function NumberPadSection() {
  return (
          <Wrapper>
            <section>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button className="today">今日</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>+</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>-</button>
              <button>.</button>
              <button>0</button>
              <button>清零</button>
              <button className="complete">完成</button>
            </section>
          </Wrapper>
  );
}

export {NumberPadSection};