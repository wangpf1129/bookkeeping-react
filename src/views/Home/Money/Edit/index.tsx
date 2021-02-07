import React from 'react';
import styled from 'styled-components';
import TopNav from 'components/TopNav';
import {Wrapper} from 'components/Wrapper';
import Icon from 'components/Icon';
import {TypeSection} from 'components/TypeSection';

import useTags from 'hooks/useTags';
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import {EditTag} from './EditTag';

const TagsList = styled.section`
  flex: 1;
  overflow-y: auto;
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
      .icon{
         width: 24px;
         height: 24px;
      }
  }
`;
const AddTag = styled.section`
  text-align: center;
  background-color:#9ccac0;
  font-size: 22px;
  padding: 14px 0;
`;

const Edit: React.FC = (props: any) => {
  const {path, url} = useRouteMatch();
  const {tags} = useTags();
  return (
          <Wrapper>
            <TopNav name="back" {...props}>
              分类管理
            </TopNav>
            <TypeSection/>
            <TagsList>
              <ul>
                {
                  tags.map((tag) => {
                    return (
                            <li key={tag.id}>
                              <div className="tags">
                                <Icon name={tag.iconName}/>
                                <span>{tag.name}</span>
                              </div>
                              <Link to={`${url}/${tag.id}`}>
                                <Icon name="more"/>
                              </Link>
                            </li>);
                  })
                }
              </ul>
            </TagsList>
            <AddTag>
              <Link to={`${url}/9999`}>
                添加类别
              </Link>
            </AddTag>
            <Switch>
              <Route path={`${path}/:id`} component={EditTag}/>
              <Route path={`${path}/:id`} component={EditTag}/>
            </Switch>
          </Wrapper>
  );
};

export default Edit;