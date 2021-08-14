import React from "react";
import styled from "@emotion/styled";
import { NavbarElement } from ".";
import logo from "../logo.svg";

const NavbarWrapper = styled.nav`
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: stretch;
  background: #fbfbfb;
`;

const LogoWrapper = styled.h1`
  height: 100px;
  margin: 0 20px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const LogoObject = styled.img`
  height: 40px;
`;

const Navbar: React.FC = () => (
  <NavbarWrapper>
    <NavbarElement link="#" label="Photos" />
    <LogoWrapper>
      35mm.
      <LogoObject alt="Logo" src={logo} />
      ne
    </LogoWrapper>
    <NavbarElement link="#" label="Stories" />
  </NavbarWrapper>
);

export { Navbar };
