import styled from 'styled-components';
import React, {PropsWithChildren} from 'react';

const Wrapper = styled.section`

`;


const WrapperChart = (props: PropsWithChildren<any>) => {
  return (
          <Wrapper>
            {props.children}
          </Wrapper>
  );
};
export {WrapperChart};