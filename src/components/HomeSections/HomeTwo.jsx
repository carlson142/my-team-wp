import React from "react";
import styled from "styled-components";

import right from "../../img/bg-pattern-home-3.svg";

import { homeOptions } from "../../data";

const Container = styled.div`
  background-color: var(--color-green);
  width: 100vw;
  height: 55rem;

  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    height: 60rem;
  }

  @media (max-width: 500px) {
    height: 85rem;
  }
`;

const Left = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10rem;
  padding-left: 15rem;

  @media (max-width: 1024px) {
    width: 100%;
    height: 25%;

    padding: 0 10rem;
  }

  @media (max-width: 500px) {
    padding: 0 5rem;
  }
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;

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
    text-align: center;

    ::after {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Right = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10rem;
  position: relative;

  @media (max-width: 1250px) {
    padding: 0 5rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 75%;
  }
`;

const OptionsCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Option = styled.div`
  display: flex;
  width: 90%;

  :not(:last-child) {
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const OptionLeft = styled.div`
  width: 20%;

  @media (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const OptionImage = styled.img``;

const OptionRight = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const OptionTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--color-red);

  margin-bottom: 1rem;
`;

const OptionText = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: hsla(0, 0%, 100%, 0.6);

  @media (max-width: 500px) {
    text-align: center;
  }
`;

const RightICont = styled.div`
  position: absolute;
  bottom: 0;
  right: -10rem;

  @media (max-width: 1024px) {
    top: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightImage = styled.img``;

const HomeTwo = () => {
  return (
    <Container>
      <Left>
        <Title>Build & manage distributed teams like no one else.</Title>
      </Left>

      <Right>
        <OptionsCont>
          {homeOptions.map((el) => {
            return (
              <Option key={el.id}>
                <OptionLeft>
                  <OptionImage src={el.img} />
                </OptionLeft>

                <OptionRight>
                  <OptionTitle>{el.title}</OptionTitle>
                  <OptionText>{el.text}</OptionText>
                </OptionRight>
              </Option>
            );
          })}
        </OptionsCont>

        <RightICont>
          <RightImage src={right} />
        </RightICont>
      </Right>
    </Container>
  );
};

export default HomeTwo;
