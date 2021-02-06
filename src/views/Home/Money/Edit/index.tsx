import React from 'react';
import styled from 'styled-components';
import TopNav from 'components/TopNav';
import useTags from '../../../../common/useTags';
import Icon from '../../../../components/Icon';

const Wrapper = styled.div`
    background-color:#fff;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1;
`;
const TypeSection = styled.section`
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
const TagsList = styled.section`
  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  li{ 
      display:flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      margin-left: 10px;
      > .tags{
        display:flex;
        align-items: center;
        > span {
          padding-left: 8px;
          font-size: 18px;
        }
        > .icon{
          width: 42px;
          height: 42px;
        }
      }
      > .icon{
         width: 32px;
         height: 32px;
       }
  }
`

const Edit = (props: any) => {
  const {tags} = useTags();
  return (
          <Wrapper>
            <TopNav name="back" {...props}>
              分类管理
            </TopNav>
            <TypeSection>
              <span className="selected">收入</span>
              <span>支出</span>
            </TypeSection>
            <TagsList>
            <ul>
              {
                tags.map((tag) => {
                  return (
                          <li key={tag}>
                            <div className="tags">
                              <Icon name={tag}/>
                              <span>{tag}</span>
                            </div>
                            <Icon name="more"/>
                          </li>);
                })
              }
            </ul>
            </TagsList>
          </Wrapper>
  );
};

export default Edit;