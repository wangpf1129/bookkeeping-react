import styled from 'styled-components';

const TagsSection = styled.section`
   padding: 20px 38px;   
   >ol {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-right: -24px;
    >li{
      background-color:#eee;
      border-radius: 10px;
      padding: 10px;
      margin-top: 24px;
      margin-right: 12px;
      display:flex;
      flex-direction: column;
      text-align: center;
      font-size: 12px;
      >span{padding-top: 5px}
      .icon{
        width: 28px;
        height: 28px;
        fill:rgba(0,0,0,.6)
      }
    }
    .active{
      background-color:#a1ddd4;
    } 
  }
`;

export {TagsSection}