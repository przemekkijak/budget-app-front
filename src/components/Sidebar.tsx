/** @jsxImportSource @emotion/react */

import React from 'react';
import { Link } from "react-router-dom";
import { css } from "@emotion/react"


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
        align-items: center;
        justify-content: center;
      `}
    >
      <ul css={css`
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column; 
        align-items: center;
      `}>
        <li className="">
          <Link to="/" className="">Dashboard</Link>
        </li>
        <li className="">
          <Link to="/history" className="">History</Link>
        </li>
        <li className="">
          <Link to="/logout" className="">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
