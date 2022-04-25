import React from "react";
import styled from "styled-components";
import AnimatedPage from "../components/AnimatedPage";
import HomeFour from "../components/HomeSections/HomeFour";
import HomeOne from "../components/HomeSections/HomeOne";
import HomeThree from "../components/HomeSections/HomeThree";
import HomeTwo from "../components/HomeSections/HomeTwo";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <AnimatedPage>
      <Container>
        <HomeOne />
        <HomeTwo />
        <HomeThree />
        <HomeFour />
      </Container>
    </AnimatedPage>
  );
};

export default HomePage;
