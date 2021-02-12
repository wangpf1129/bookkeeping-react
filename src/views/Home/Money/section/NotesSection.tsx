import styled from 'styled-components';
import Icon from 'components/Icon';
import React, {  useRef} from 'react';
import day from 'dayjs'

const Wrapper = styled.section`
    padding: 10px 20px;
  > label{
    position: relative;
    display:flex;
    align-items: center;
    margin-top: 10px;
    >input{
      width: 100%;
      padding: 12px 48px;
      background-color:#fff;
      border: none;
      border-radius: 10px; 
      &.dateIpt{  
        padding: 12px 8px 12px 48px; 
      }
    }
    .icon{
      position: absolute;
      left: 5px;
      width: 28px;
      height: 28px;
    }
  }
  .create_date{
    >input{
      width: 100%;
      background-color:#fff;
      border-radius: 10px;
    }
  }
`;


type  Props = {
  note:string,
  createdAt:string
  onChangeNote:(value:string)=>void
  onChangeDate:(createdAt:string)=>void
}
const NotesSection:React.FC<Props>=(props)=> {
  const {note,createdAt} = props
  const noteRef = useRef<HTMLInputElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)

  const onBlur = ()=>{
    if(noteRef.current !== null){
      console.log(noteRef.current.value);
      props.onChangeNote(noteRef.current.value.trim())
    }

  }
  const onchange =()=>{
    if(dateRef.current !== null){
      const date = new Date(dateRef.current.value).toISOString().trim()
      props.onChangeDate(date)
    }
  }

  return (
          <Wrapper>
            <label>
              <Icon name="note"/>
              <input type="text" placeholder="点击写备注..."
                    defaultValue={note}
                     ref ={noteRef}
                     onBlur={onBlur}
              />
            </label>
            <label className="create_date">
              <Icon name="date"/>
              <input type="datetime-local"
                     className="dateIpt"
                     defaultValue={day(createdAt).format('YYYY-MM-DDTHH:mm')}
                     ref ={dateRef}
                     onChange={onchange}
              />
            </label>
          </Wrapper>
  )
}

export  {NotesSection}