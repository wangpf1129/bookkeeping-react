import styled from 'styled-components';

const NumberPadSection = styled.section`
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

export {NumberPadSection}