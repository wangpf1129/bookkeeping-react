import Nav from '../Nav';
import React from 'react';
import styled from 'styled-components';
import TopNav from '../TopNav';

const Wrapper =styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex: 1;
  overflow-y: auto;
    &::-webkit-scrollbar{
    display: none;
  }
`

type  Props ={
  name:string
}
const Layout:React.FC<Props> = (props:any)=> {
  return (
          <Wrapper>
            <TopNav>{props.name}</TopNav>
            <Main>
              {props.children}
            </Main>
            <Nav/>
          </Wrapper>
  )
}

export default Layout