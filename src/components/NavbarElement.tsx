import React from "react";
import styled from "@emotion/styled";

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border: 1px solid black;
  color: black;
  text-decoration: none;
`;

interface NavbarProps {
  link: string;
  label: string;
}

const NavbarElement: React.FC<NavbarProps> = ({ link, label }: NavbarProps) => (
  <Link href={link}>{label}</Link>
);

export { NavbarElement };
