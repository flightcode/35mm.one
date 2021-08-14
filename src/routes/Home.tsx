import React from "react";
import styled from "@emotion/styled";
import { Header, Landing } from "../components";

const ContentWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
`;

const Home: React.FC = () => (
  <div>
    <Header />
    <ContentWrapper>
      <Landing />
    </ContentWrapper>
  </div>
);

export { Home };
