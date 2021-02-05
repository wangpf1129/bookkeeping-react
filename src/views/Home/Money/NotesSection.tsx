import styled from 'styled-components';
import Icon from 'components/Icon';
import React, {useEffect, useRef, useState} from 'react';

const Wrapper = styled.section`
    padding: 10px 20px;
  > label{
    position: relative;
    display:flex;
    align-items: center;
    >input{
      width: 100%;
      padding: 12px 48px;
      background-color:#fff;
      border: none;
      border-radius: 10px;
    }
    .icon{
      position: absolute;
      left: 5px;
      width: 32px;
      height: 32px;
      fill:#a7e0d1;
    }
    >span{
      position: absolute;
      top: 3px;
      right: 10px;
      font-weight: 800;
      font-size: 16px;
    }
  }
`;


const NotesSection:React.FC =()=> {
  const [note,setNote] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const onBlur = ()=>{
    if(inputRef.current !== null){
      setNote(inputRef.current.value.trim())
    }
  }
  useEffect(()=>{
    if(note !== ""){
      console.log(note);
    }
  },[note])
  return (
          <Wrapper>
            <label>
              <Icon name="note"/>
              <input type="text" placeholder="点击写备注..."
                    defaultValue={note}
                     ref ={inputRef}
                     onBlur={onBlur}
              />
              <span>30</span>
            </label>
          </Wrapper>
  )
}

export  {NotesSection}