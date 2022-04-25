import React from "react";
import styled from "styled-components";
import AboutOne from "../components/AboutSections/AboutOne";
import AboutThree from "../components/AboutSections/AboutThree";
import AboutTwo from "../components/AboutSections/AboutTwo";
import AnimatedPage from "../components/AnimatedPage";
import HomeFour from "../components/HomeSections/HomeFour";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const AboutPage = () => {
  return (
    <AnimatedPage>
      <Container>
        <AboutOne />
        <AboutTwo />
        <AboutThree />
        <HomeFour />
      </Container>
    </AnimatedPage>
  );
};

export default AboutPage;
