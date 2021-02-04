import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';


const NavWrapper = styled.nav`
    background-color:#F9FAF5;
    box-shadow: 0 0 3px rgba(0,0,0,.25);
    >ul{
      display: flex;
     >li{
       flex: 1;
       text-align: center;
       padding: 8px 0 ;
       display: flex;
       flex-direction: column;
       align-items: center;
       .icon{
         width: 24px;
         height: 24px;
       }
     }
    }
`;

function Nav() {
  return (
          <NavWrapper>
            <ul>
              <li>
                <Link to="/home">
                  <Icon name="home"/>
                  <p>TODAY</p>
                </Link>
              </li>
              <li>
                <Link to="/statistics">
                  <Icon name="statistics"/>
                  <p>统计</p>
                </Link>
              </li>
              <li>
                <Link to="/assets">
                  <Icon name="assets"/>
                  <p>资产</p>
                </Link>
              </li>
            </ul>
          </NavWrapper>
  );
}

export default Nav;