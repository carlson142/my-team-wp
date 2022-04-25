import React, { useState } from "react";
import styled from "styled-components";
import "./socials.scss";

import top from "../../img/bg-pattern-about-2-contact-1.svg";
import bot from "../../img/bg-pattern-home-4-about-3.svg";

import { IoAdd, IoClose, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";

import { aboutDirectors } from "../../data";

const Container = styled.div`
  background-color: var(--color-jungle-green);
  padding: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  @media (max-width: 500px) {
    padding: 5rem;
    padding-bottom: 10rem;
  }
`;

const Title = styled.h3`
  font-size: 5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const TopICont = styled.div`
  position: absolute;
  left: -10rem;
  top: 0;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Image = styled.img``;

const BotICont = styled.div`
  position: absolute;
  bottom: -3px;
  right: 0;

  @media (max-width: 500px) {
    display: none;
  }
`;

const CardCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 35rem);
  grid-template-rows: repeat(2, 25rem);

  row-gap: 5rem;
  column-gap: 10rem;

  margin-top: 5rem;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 35rem);
    grid-template-rows: repeat(3, 25rem);
  }

  @media (max-width: 900px) {
    grid-template-columns: 35rem;
    grid-template-rows: repeat(6, 25rem);
  }

  @media (max-width: 500px) {
    grid-template-columns: 80vw;
  }
`;

const Card = styled.div`
  position: relative;

  height: 100%;
  width: 100%;

  perspective: 150rem;
  -moz-perspective: 150rem;
`;

const CardFront = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--color-green);
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  backface-visibility: hidden;
  transform: ${(props) =>
    props.back === true ? "rotateY(180deg)" : "rotateY(0)"};

  transition: all 0.5s ease-in;
`;

const FrontUI = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 3rem;
  padding-bottom: 5rem;
`;

const FrontImgCont = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  border: 2px solid var(--color-rapture-blue);
  overflow: hidden;
`;

const FrontImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const FrontName = styled.h3`
  font-size: 2rem;
  color: var(--color-rapture-blue);
`;

const FrontJob = styled.h4`
  font-size: 1.6rem;
  font-weight: 500;
  color: white;
`;

const CardBack = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--color-dark-green);
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  backface-visibility: hidden;
  transform: ${(props) =>
    props.back === true ? "rotateY(0)" : "rotateY(180deg)"};

  transition: all 0.5s ease-in;
`;

const BackUI = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 3rem;
  padding-bottom: 5rem;
`;

const BackName = styled.h4`
  font-size: 1.8rem;
  color: var(--color-rapture-blue);
`;

const BackText = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: white;
  text-align: center;
`;

const BackSocials = styled.div`
  display: flex;
`;

const BtnCont = styled.div`
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translate(-50%);

  z-index: 1;
`;

const CardButton = styled.button`
  height: 6rem;
  width: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: none;

  cursor: pointer;

  background-color: ${(props) =>
    props.back === false ? "var(--color-red)" : "var(--color-rapture-blue)"};

  transition: var(--tr);

  :hover {
    background-color: ${(props) =>
      props.back === false ? "var(--color-rapture-blue)" : "var(--color-red)"};
  }
`;

const AboutTwo = () => {
  const [rotate, setRotate] = useState(true); // back side of card

  const [data, setData] = useState(aboutDirectors);

  const rotateCard = (id) => {
    const clickedCard = data.filter((el) => el.id === id);

    clickedCard.map((card) => {
      card.back =
        card.back === !rotate ? (card.back = rotate) : (card.back = !rotate);
      return setRotate((state) => (state = !state));
    });

    return clickedCard;
  };

  return (
    <Container>
      <TopICont>
        <Image src={top} />
      </TopICont>

      <Title>Meet the directors</Title>

      <CardCont>
        {data.map((el) => {
          return (
            <Card key={el.id}>
              {/* FRONT */}
              <CardFront back={el.back}>
                <FrontUI>
                  <FrontImgCont>
                    <FrontImg src={el.img} />
                  </FrontImgCont>

                  <FrontName>{el.name}</FrontName>

                  <FrontJob>{el.work}</FrontJob>
                </FrontUI>
              </CardFront>

              {/* BACK */}
              <CardBack back={el.back}>
                <BackUI>
                  <BackName>{el.name}</BackName>

                  <BackText>{el.text}</BackText>

                  <BackSocials>
                    <IoLogoTwitter className="backSocials" />
                    <IoLogoLinkedin className="backSocials" />
                  </BackSocials>
                </BackUI>
              </CardBack>

              {/* BUTTON */}
              <BtnCont>
                <CardButton back={el.back} onClick={() => rotateCard(el.id)}>
                  {el.back === false ? (
                    <IoAdd size={25} />
                  ) : (
                    <IoClose size={25} />
                  )}
                </CardButton>
              </BtnCont>
            </Card>
          );
        })}
      </CardCont>

      <BotICont>
        <Image src={bot} />
      </BotICont>
    </Container>
  );
};

export default AboutTwo;
