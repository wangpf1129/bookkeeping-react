import styled from 'styled-components';
import React, {useState} from 'react';

import generateOutput from 'common/generateOutput';

const Wrapper = styled.section`
  position:relative;
  padding: 10px 20px;
  .money{
    position: absolute;
    top: -96px;
    right: 32px;
    font-weight: 800;
    font-size: 16px;
  }
  > section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-right: -38px;
   > button{
   background-color:#fff;
   font-weight: 600;
   font-size: 24px;
   border-radius: 10px;
   margin-right: 12px;
   width: 20%;
   height: 40px;
   border: 1px solid #000;
   margin-bottom: 12px;
     &.today{
      background-color:#f0aa9f;
     }
     &.complete{
      width: calc(40% + 12px);
      background-color:#eec511;
     }
   }
  }
`;

type  Props = {
  amount:number,
  onChangeAmount:(amount:number)=>void,
  onSubmit ?: ()=>void
}
const NumberPadSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState('0');
  const setOutput = (output:string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
    props.onChangeAmount(parseFloat(output))
  };
  const getButton = (e: React.MouseEvent) => {
    const text = (e.target as HTMLBaseElement).textContent;
    if (text === null) return;
    if(text === '完成'){
       if(props.onSubmit){
         props.onSubmit();
       }
    }
    setOutput(generateOutput(text,output))
  };

  return (
          <Wrapper>
            <div className="money">{output}</div>
            <section onClick={getButton}>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button className="today">清零</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>+</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>-</button>
              <button>0</button>
              <button>删除</button>
              <button className="complete">
                {
                  output.indexOf("+") >= 0|| output.indexOf("-") >= 0 ? "=":"完成"
                }
              </button>
            </section>
          </Wrapper>
  );
};

export {NumberPadSection};