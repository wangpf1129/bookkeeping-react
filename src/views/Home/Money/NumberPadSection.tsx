import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  position:relative;
  padding: 10px 20px;
  .money{
    position: absolute;
    top: -48px;
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
      background-color:#eec511;
     }
   }
  }
`;


const NumberPadSection: React.FC = (props) => {
  const [output, _setOutput] = useState('0');
  const setOutput = (output:string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };

  const getButton = (e: React.MouseEvent) => {
    const text = (e.target as HTMLBaseElement).textContent;
    if (text === null) return;
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '.':
        if (output.indexOf('.') >= 0) return;
        setOutput(output + '.');
        break;
      case'+':
        setOutput(output+"+")
        break;
      case'清零':
        setOutput("")
        break;
      case '今日':
        console.log('今天的日期');
        break;
      case'删除':
        if (output.length === 1) {
          setOutput('0');
        } else {
          setOutput(output.slice(0, -1));
        }
        break;
      case '=':
        let arr = output.split("+");
        let result =0;
        for(let i=0;i<arr.length;i++){
          result += Number(arr[i])
        }
        setOutput(result+"")
        break;
      case '完成':
        console.log('确认');
        break;


    }
  };
  return (
          <Wrapper>
            <div className="money">{output}</div>
            <section onClick={getButton}>
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
              <button>清零</button>
              <button>.</button>
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