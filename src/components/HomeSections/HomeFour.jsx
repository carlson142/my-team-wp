import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton.jsx";

import left from "../../img/bg-pattern-home-6-about-5.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: var(--color-red);

  width: 100vw;
  padding: 10rem;
  display: flex;

  position: relative;

  @media (max-width: 1024px) {
    padding-right: 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5rem;
  }

  @media (max-width: 500px) {
    padding: 5rem 3rem;
  }
`;

const Left = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LeftICont = styled.div`
  position: absolute;
  left: 0;
  bottom: -4px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const LeftImage = styled.img``;

const Text = styled.h2`
  font-size: 5rem;
  color: var(--color-green);

  text-align: end;

  @media (max-width: 1250px) {
    text-align: start;
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;

    margin-top: 5rem;
  }
`;

const BtnCont = styled.div``;

const HomeFour = () => {
  const nav = useNavigate();

  return (
    <Container>
      <Left>
        <LeftICont>
          <LeftImage src={left} />
        </LeftICont>
        <Text>Ready to get started?</Text>
      </Left>

      <Right>
        <BtnCont>
          <CustomButton secondary onClick={() => nav("/contact")}>
            contact us
          </CustomButton>
        </BtnCont>
      </Right>
    </Container>
  );
};

export default HomeFour;
