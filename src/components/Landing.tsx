import React from "react";
import styled from "@emotion/styled";
import bg from "../bg.jpg";

const LandingWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 220px);
`;

const Backdrop = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextOverlay = styled.h1`
  z-index: +1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Landing: React.FC = () => (
  <LandingWrapper>
    <Backdrop src={bg} />
    <TextOverlay>Analog For All</TextOverlay>
  </LandingWrapper>
);

export { Landing };
