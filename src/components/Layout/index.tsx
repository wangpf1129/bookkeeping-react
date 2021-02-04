import Nav from '../Nav';
import React from 'react';
import styled from 'styled-components';

const Wrapper =styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex: 1;
  overflow: auto;
`

function Layout(props:any) {
  return (
          <Wrapper>
            <Main>
              {props.children}
            </Main>
            <Nav/>
          </Wrapper>
  )
}

export default Layout