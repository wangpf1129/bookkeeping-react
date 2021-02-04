import styled from 'styled-components';

const NotesSection = styled.section`
    padding: 10px 20px;
  > label{
    position: relative;
    display:flex;
    align-items: center;
    >input{
      width: 100%;
      padding: 12px 48px;
      background-color:#fff;
      border: none;
      border-radius: 10px;
    }
    .icon{
      position: absolute;
      left: 5px;
      width: 32px;
      height: 32px;
      fill:#a7e0d1;
    }
    >span{
      position: absolute;
      top: 3px;
      right: 10px;
      font-weight: 800;
      font-size: 16px;
    }
  }
`;

export  {NotesSection}