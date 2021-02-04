import React from 'react';
import styled from 'styled-components';
import TopNav from 'components/TopNav';
import Icon from 'components/Icon';

import {CategorySection} from './CategorySection';
import {KeyboardSection} from './KeyboardSection';
import {NotesSection} from './NotesSection';
import {NumberPadSection} from './NumberPadSection';
import {TagsSection} from './TagsSection';


const Wrapper = styled.div`
    background-color:#fff;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    overflow-x: hidden;
`;
const Main = styled.div`
  flex: 1;
  overflow: auto;
`;


function Money(props: any) {
  return (
          <Wrapper>
            <TopNav name="back" {...props}>
              <CategorySection>
                <span className="selected">支出</span>
                <span>收入</span>
              </CategorySection>
            </TopNav>
            <Main>
              <TagsSection>
                <ol>
                  <li className="active">
                    <Icon name="eat"/>
                    <span>餐饮</span>
                  </li>
                  <li>
                    <Icon name="play"/>
                    <span>娱乐</span>
                  </li>
                  <li>
                    <Icon name="daily"/>
                    <span>日用</span>
                  </li>
                  <li>
                    <Icon name="play"/>
                    <span>通讯</span>
                  </li>
                  <li>
                    <Icon name="play"/>
                    <span>果蔬</span>
                  </li>
                  <li>
                    <Icon name="play"/>
                    <span>交通</span>
                  </li>
                  <li>
                    <Icon name="add"/>
                    <span>添加</span>
                  </li>
                </ol>
              </TagsSection>
            </Main>
            <KeyboardSection>
              <NotesSection>
                <label>
                  <Icon name="note"/>
                  <input type="text" placeholder="点击写备注..."/>
                  <span>30</span>
                </label>
              </NotesSection>
              <NumberPadSection>
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
              </NumberPadSection>
            </KeyboardSection>
          </Wrapper>
  );
}

export default Money;