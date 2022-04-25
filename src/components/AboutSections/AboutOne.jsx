import React from "react";
import styled from "styled-components";

import right from "../../img/bg-pattern-about-1-mobile-nav-1.svg";

const Container = styled.div`
  width: 100vw;
  height: 40rem;

  display: flex;
  background-color: var(--color-midnight-green);

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 30%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    height: 40%;
  }
`;

const Title = styled.h2`
  font-size: 6rem;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 4rem;
  }
`;

const Right = styled.div`
  width: 70%;
  padding: 0 15rem 0 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    height: 60%;
  }

  @media (max-width: 768px) {
    padding: 0 15rem 0 5rem;
  }

  @media (max-width: 500px) {
    padding: 3rem;
    padding-top: 0;
    padding-bottom: 5rem;
  }
`;

const Text = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.6;

  position: relative;

  ::after {
    content: "";
    display: block;

    position: absolute;
    top: -6rem;
    left: 0;

    height: 2px;
    width: 8rem;
    background-color: var(--color-red);
  }

  @media (max-width: 1024px) {
    ::after {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`;

const RightICont = styled.div`
  position: absolute;
  bottom: -4px;
  right: -10rem;

  @media (max-width: 500px) {
    display: none;
  }
`;

const RightImage = styled.img``;

const AboutOne = () => {
  return (
    <Container>
      <Left>
        <Title>About</Title>
      </Left>

      <Right>
        <Text>
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </Text>

        <RightICont>
          <RightImage src={right} />
        </RightICont>
      </Right>
    </Container>
  );
};

export default AboutOne;
