import React from "react";
import styled from "styled-components";

import top from "../../img/bg-pattern-home-4-about-3.svg";
import bot from "../../img/bg-pattern-home-5.svg";
import quotes from "../../img/icon-quotes.svg";

import { homeStories } from "../../data";

const Container = styled.div`
  background-color: var(--color-midnight-green);
  width: 100vw;
  height: 70rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10rem;
  position: relative;

  @media (max-width: 1024px) {
    height: 115rem;
    padding: 10rem 5rem;
  }

  @media (max-width: 768px) {
    height: 125rem;
  }

  @media (max-width: 500px) {
    height: 135rem;
    padding: 5rem 3rem;
  }
`;

const Title = styled.h2`
  font-size: 5rem;
  text-align: center;

  width: 79%;

  span {
    color: var(--color-rapture-blue);
  }

  @media (max-width: 1250px) {
    font-size: 4rem;
  }

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

const TopICont = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  @media (max-width: 768px) {
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

const StoriesCont = styled.div`
  display: flex;

  margin-top: 8rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Storie = styled.div`
  display: flex;
  flex-direction: column;

  width: 25vw;
  position: relative;

  :not(:last-child) {
    margin-right: 5rem;
  }

  @media (max-width: 1024px) {
    width: 100%;

    :not(:last-child) {
      margin-right: 0rem;
      margin-bottom: 10rem;
    }
  }
`;

const Quotes = styled.div`
  position: absolute;
  top: -3.5rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
`;

const QuotesImg = styled.img``;

const StorieText = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;

  text-align: center;

  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

const StoryName = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-rapture-blue);

  margin-bottom: 2rem;
`;

const StoryWork = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  font-style: italic;
  text-align: center;

  margin-bottom: 2rem;
`;

const StorieICont = styled.div`
  height: 7rem;
  width: 7rem;

  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--color-rapture-blue);

  align-self: center;
`;

const StorieImg = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

const HomeThree = () => {
  return (
    <Container>
      <TopICont>
        <Image src={top} />
      </TopICont>

      <Title>
        Delivering real results for top companies. Some of our{" "}
        <span>success stories.</span>
      </Title>

      <StoriesCont>
        {homeStories.map((el) => {
          return (
            <Storie key={el.id}>
              <Quotes>
                <QuotesImg src={quotes} />
              </Quotes>
              <StorieText>{el.text}</StorieText>
              <StoryName>{el.name}</StoryName>
              <StoryWork>{el.work}</StoryWork>
              <StorieICont>
                <StorieImg src={el.img} />
              </StorieICont>
            </Storie>
          );
        })}
      </StoriesCont>

      <BotICont>
        <Image src={bot} />
      </BotICont>
    </Container>
  );
};

export default HomeThree;
