import styled from 'styled-components';
import Icon from 'components/Icon';
import React from 'react';
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import Edit from '../Edit';
import useTags from 'common/useTags';

const Wrapper = styled.section`
   padding: 20px 38px;   
   >ol {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-right: -24px;
    margin-left: -4px;
    >li{
      background-color:#fff;
      border-radius: 10px;
      box-shadow: 2px 3px 4px #ddd;
      padding: 10px 12px;
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
    .selected{
      background-color:#a1ddd4;
      box-shadow: 1px 2px 2px #ddd;
    } 
  }
`;

type Props = {
  value: number[],
  onChange: (value: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  let {path, url} = useRouteMatch();
  const {tags} = useTags();
  const selectedTagIds = props.value;
  const toggleTag = (tagId: number) => {
    return () => {
      const index = selectedTagIds.indexOf(tagId);
      if (index >= 0) {
        // 如果 该 tag被选中，就复制所有没有被选中的 tag 作为新的 selectedTag
        props.onChange(selectedTagIds.filter(item => item !== tagId));
      } else {
        props.onChange([tagId]);
      }
    };
  };


  return (
          <Wrapper>
            <ol>
              {tags.map((tag) => {
                return (
                        <li key={tag.id} onClick={toggleTag(tag.id)}
                            className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}>
                          <Icon name={tag.iconName}/>
                          <span>{tag.name}</span>
                        </li>);
              })}
              <li>
                <Icon name="set"/>
                <span>
                <Link to={`${url}/edit`}>设置</Link>
              </span>
              </li>
            </ol>
            <Switch>
              <Route path={`${path}/:edit`} component={Edit}/>
            </Switch>
          </Wrapper>
  );
};
export {TagsSection};