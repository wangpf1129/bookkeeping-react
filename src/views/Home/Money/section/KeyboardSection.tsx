import styled from 'styled-components';
import React from 'react';
import {NotesSection} from './NotesSection';
import {NumberPadSection} from './NumberPadSection';

const Wrapper = styled.section`
  background-color:#9ccac0;
  box-shadow: 2px 2px 3px rgba(0,0,0,.8);
`;

type  Props = {
  note:string,
  createdAt:string
  amount:number,
  onChangeNote:(note:string)=>void
  onChangeAmount:(amount:number)=>void
  onChangeDate:(createdAt:string)=>void
  onSubmit ?: ()=>void
}
const KeyboardSection:React.FC<Props>=(props)=>{
  return (
          <Wrapper>
              <NotesSection {...props}/>
              <NumberPadSection {...props}/>
          </Wrapper>
  )
}

export  {KeyboardSection}
