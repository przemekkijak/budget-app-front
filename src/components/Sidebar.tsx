/** @jsxImportSource @emotion/react */

import React from 'react';
import { Link } from "react-router-dom";
import { css } from "@emotion/react"
import {styled} from "@mui/material";

const SidebarDiv = styled('div')({
  width: '100%',
  margin: '10px',
  padding: '20px 0 20px 0',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  ":hover": {
    backgroundColor: '#ddd'
  }
});

const Sidebar = () => {
  return (
      <div
          css={css`
        position: relative;
        border: 1px solid red;
        height: 100vh;
        width: 10vw;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
      >
        <SidebarDiv>
          <Link to="/" className="">
            Dashboard
          </Link>
        </SidebarDiv>

        <SidebarDiv>
          <Link to="/history" className="">
            History
          </Link>
        </SidebarDiv>

        <SidebarDiv>
          <Link to="/logout" className="">
            Logout
          </Link>
        </SidebarDiv>
      </div>
  );
};


export default Sidebar;
