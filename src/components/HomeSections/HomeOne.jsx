import React from "react";
import styled from "styled-components";

import left from "../../img/bg-pattern-home-1.svg";
import right from "../../img/bg-pattern-home-2.svg";

const Container = styled.div`
  background-color: var(--color-midnight-green);
  width: 100vw;
  height: 50rem;

  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 55rem;
  }

  @media (max-width: 768px) {
    height: 45rem;
  }
`;

const Left = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 15rem;

  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    height: 30%;

    padding-left: 0;
    padding: 0rem 10rem;
    align-items: flex-end;
  }

  @media (max-width: 500px) {
    padding: 0rem 5rem;
  }
`;

const Title = styled.h1`
  font-size: 9rem;
  font-weight: 700;

  span {
    color: var(--color-red);
  }

  @media (max-width: 1024px) {
    font-size: 6rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 500px) {
    font-size: 4rem;
  }
`;

const LeftICont = styled.div`
  position: absolute;
  left: -10rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LeftImage = styled.img``;

const Right = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10rem;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    height: 70%;

    padding: 5rem;
    padding-top: 0rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
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
    background-color: var(--color-rapture-blue);
  }

  @media (max-width: 1024px) {
    text-align: center;

    ::after {
      display: none;
    }
  }

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const RightICont = styled.div`
  position: absolute;
  bottom: -4px;
`;

const RightImage = styled.img``;

const HomeOne = () => {
  return (
    <Container>
      <Left>
        <Title>
          Find the best <span>talent</span>{" "}
        </Title>

        <LeftICont>
          <LeftImage src={left} />
        </LeftICont>
      </Left>

      <Right>
        <Text>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </Text>

        <RightICont>
          <RightImage src={right} />
        </RightICont>
      </Right>
    </Container>
  );
};

export default HomeOne;
