import {NavLink} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';


const NavWrapper = styled.nav`
    background-color:#F9FAF5;
    >ul{
      display: flex;
      >li{
         flex: 1;
         text-align: center;
         padding: 8px 0 ;
         .selected{
          color: #81b7aa;
          .icon{fill:#81b7aa}
         }
         .icon{
          width: 24px;
          height: 24px;
          fill:#b7bdcd;
         } 
       a{
         display: flex;
         flex-direction: column;
         align-items: center;
         color: #b7bdcd;
       }
      }
    }
`;

function Nav() {
  return (
          <NavWrapper>
            <ul>
              <li>
                <NavLink to="/home" activeClassName="selected">
                  <Icon name="home"/>
                  TODAY
                </NavLink>
              </li>
              <li>
                <NavLink to="/detail" activeClassName="selected">
                  <Icon name="detail"/>
                  明细
                </NavLink>
              </li>
              <li>
                <NavLink to="/statistics" activeClassName="selected">
                  <Icon name="statistics"/>
                  统计
                </NavLink>
              </li>
            </ul>
          </NavWrapper>
  );
}

export default Nav;