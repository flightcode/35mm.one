import React from "react";
import styled from "@emotion/styled";
import Navbar from "./";

const HeaderWrapper = styled.header`
  width: 100vw;
  position: fixed;
  z-index: +1;
`;

const Header = () => (
  <HeaderWrapper>
    <Navbar />
  </HeaderWrapper>
);

export { Header };
