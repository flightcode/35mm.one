import React from "react";
import styled from "@emotion/styled";
import { NavbarElement } from ".";
import logo from "../logo.svg";

const NavbarWrapper = styled.nav`
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  background: #fbfbfb;
`;

const LogoObject = styled.img`
  height: 120px;
  margin: 0 20px;
`;

const Navbar: React.FC = () => (
  <NavbarWrapper>
    <NavbarElement link="#" label="Photos" />
    <LogoObject alt="Logo" src={logo} />
    <NavbarElement link="#" label="Stories" />
  </NavbarWrapper>
);

export { Navbar };
