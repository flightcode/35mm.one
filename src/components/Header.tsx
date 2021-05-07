import React from "react";
import styled from "@emotion/styled";
import { Navbar } from ".";

const HeaderWrapper = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: +1;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <Navbar />
  </HeaderWrapper>
);

export { Header };
