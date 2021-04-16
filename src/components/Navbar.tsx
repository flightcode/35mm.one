import React from "react";
import styled from "@emotion/styled";
import { NavbarElement } from ".";

const NavbarWrapper = styled.nav`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const LogoObject = styled.img`
  width: 60px;
  border: 1px solid black;
`;

const Navbar: React.FC = () => (
  <NavbarWrapper>
    <NavbarElement link="#" label="Photos" />
    <LogoObject alt="Logo" />
    <NavbarElement link="#" label="Stories" />
  </NavbarWrapper>
);

export { Navbar };
