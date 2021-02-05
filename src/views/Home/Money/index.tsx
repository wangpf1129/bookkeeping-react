import React from 'react';
import styled from 'styled-components';

import TopNav from 'components/TopNav';

import {CategorySection} from './CategorySection';
import {TagsSection} from './TagsSection';
import {NotesSection} from './NotesSection';
import {NumberPadSection} from './NumberPadSection';


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
const KeyboardSection = styled.section`
  background-color:#9ccac0;
  box-shadow: 2px 2px 3px rgba(0,0,0,.8);
`;


function Money(props: any) {
  return (
          <Wrapper>
            <TopNav name="back" {...props}>
              <CategorySection />
            </TopNav>
            <Main>
              <TagsSection/>
            </Main>
            <KeyboardSection>
              <NotesSection/>
              <NumberPadSection />
            </KeyboardSection>
          </Wrapper>
  );
}

export default Money;