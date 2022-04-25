import React from "react";
import styled from "styled-components";

import img from "../../img/bg-pattern-about-4.svg";
import verge from "../../img/logo-the-verge.png";
import jakarta from "../../img/logo-jakarta-post.png";
import guardian from "../../img/logo-the-guardian.png";
import techradar from "../../img/logo-tech-radar.png";
import gadgets from "../../img/logo-gadgets-now.png";

const Container = styled.div`
  width: 100%;
  padding: 10rem;

  background-color: var(--color-green);

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  @media (max-width: 500px) {
    padding: 5rem;
  }
`;

const ImgCont = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Img = styled.img``;

const Title = styled.h2`
  font-size: 5rem;
  color: white;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const ClientsCont = styled.div`
  display: flex;

  margin-top: 5rem;

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

const Client = styled.img`
  height: 4.5rem;
  width: auto;

  :not(:last-child) {
    margin-right: 5rem;
  }

  @media (max-width: 1440px) {
    height: 3rem;
  }

  @media (max-width: 1250px) {
    margin-right: 0;
    margin-bottom: 4rem;

    height: auto;
    width: 25rem;
    width: 100%;
  }
`;

const AboutThree = () => {
  return (
    <Container>
      <ImgCont>
        <Img src={img} />
      </ImgCont>

      <Title>Some of our clients</Title>

      <ClientsCont>
        <Client src={verge} />
        <Client src={jakarta} />
        <Client src={guardian} />
        <Client src={techradar} />
        <Client src={gadgets} />
      </ClientsCont>
    </Container>
  );
};

export default AboutThree;
