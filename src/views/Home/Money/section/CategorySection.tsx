import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 18px;
  padding: 3px 0;
  >span{margin-left: 8px}
  .selected{
    border-bottom: 2px solid #000;
  }
`;
type  Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void
}
const CategorySection: React.FC<Props> = (props) => {
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const categoryMap = {'-': '支出', '+': '收入'};
  const category = props.value;
  return (
          <Wrapper>
            {
              categoryList.map(type => (
                      <span key={type}
                            onClick={() => {props.onChange(type);}}
                            className={category === type ? 'selected' : ''}
                      >{categoryMap[type]}</span>
              ))
            }
          </Wrapper>
  );
};


export {CategorySection};