import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border: 1px solid black;
  color: black;
  text-decoration: none;
`;

const NavbarElement = (props) => <Link href={props.link}>{props.label}</Link>;

NavbarElement.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export { NavbarElement };
