import styled from 'styled-components';

const TagsSection = styled.section`
   padding: 20px 38px;   
   >ol {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    >li{
      background-color:#eee;
      border-radius: 10px;
      padding: 10px;
      margin: 5px 10px;
      display:flex;
      flex-direction: column;
      text-align: center;
      font-size: 14px;
      >span{padding-top: 5px}
      .icon{
        width: 32px;
        height: 32px;
        fill:rgba(0,0,0,.6)
      }
    }
    .active{
      background-color:#a1ddd4;
    } 
  }
`;

export {TagsSection}