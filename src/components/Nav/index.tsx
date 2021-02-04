import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    background-color:#F9FAF5;
    box-shadow: 0 0 3px rgba(0,0,0,.25);
    >ul{
      display: flex;
     >li{
       flex: 1;
       text-align: center;
       padding: 24px;
     }
    }
`;

function Nav() {
  return (
          <NavWrapper>
            <ul>
              <li>
                <Link to="/home">TODAY</Link>
              </li>
              <li>
                <Link to="/statistics">统计</Link>
              </li>
              <li>
                <Link to="/assets">资产</Link>
              </li>
            </ul>
          </NavWrapper>
  );
}

export  default  Nav