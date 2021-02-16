import styled from 'styled-components';
import Icon from 'components/Icon';
import React, {useRef, useState} from 'react';
import day from 'dayjs';
import {MaskDiv} from 'components/MaskDiv/MaskDiv';


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
  .goNote{
      width: 100%;
      padding: 12px 48px;
      background-color:#fff;
      border: none;
      border-radius: 10px; 
      span{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
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
  note: string,
  createdAt: string
  onChangeNote: (value: string) => void
  onChangeDate: (createdAt: string) => void
}
const NotesSection: React.FC<Props> = (props) => {
  const {note, createdAt} = props;
  const [styleInput, setStyleInput] = useState({display: 'none'});
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const onBlur = () => {
    if (noteRef.current !== null) {
      props.onChangeNote(noteRef.current.value.trim());
    }
  };
  const onchange = () => {
    if (dateRef.current !== null) {
      const date = new Date(dateRef.current.value).toISOString().trim();
      props.onChangeDate(date);
    }
  };
  const toNote = () => {
    setStyleInput({display: 'block'});
  };
  const closeMask = () => {
    setStyleInput({display: 'none'});
  };
  const sureText = () => {
    if (noteRef.current !== null) {
      props.onChangeNote(noteRef.current.value.trim());
      setStyleInput({display: 'none'});
    }
  };


  return (
          <Wrapper>
            <label className="goNote" onClick={toNote}>
              <Icon name="note"/>
              <span>{note ? note : '写点备注吧...'}</span>
            </label>
            <label className="create_date">
              <Icon name="date"/>
              <input type="datetime-local"
                     className="dateIpt"
                     defaultValue={day(createdAt).format('YYYY-MM-DDTHH:mm')}
                     ref={dateRef}
                     onChange={onchange}
              />
            </label>
            <MaskDiv style={styleInput}>
              <div className='box'>
                <div className='title'>
                  <Icon name='占位'/>
                  <span>记账备注</span>
                  <span onClick={closeMask}><Icon name='close'/></span>
                </div>
                <label className='main'>
                  <span>输入备注：</span>
                  <textarea
                          defaultValue={note}
                          ref={noteRef}
                          onBlur={onBlur}
                  />
                  <button onClick={sureText}>确定</button>
                </label>
              </div>
            </MaskDiv>
          </Wrapper>
  );
};

export {NotesSection};