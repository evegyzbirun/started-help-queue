import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
  background-color: purple;
`;

const StyledWrapper = styled.section`
  background-color: orange;
`;


function Header() {
  return (
    <StyledWrapper>

      {/* <HelpQueueHeader> */}


        <h1> Help Queue</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
      {/* </HelpQueueHeader> */}

    </StyledWrapper>
  );
}

export default Header;