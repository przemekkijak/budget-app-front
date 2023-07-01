/** @jsxImportSource @emotion/react */

import React from "react";
import Sidebar from "@/components/Sidebar";
import { css } from "@emotion/react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div css={css`
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  border: 1px solid pink;
  `}>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
};