import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  IoLogoFacebook,
  IoLogoPinterest,
  IoLogoTwitter,
} from "react-icons/io5";

import logo from "../img/logo.svg";
import "./Footer.scss";

const Container = styled.footer`
  padding: 5rem 10rem;
  background-color: var(--color-dark-green);

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    padding: 5rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const LogoCont = styled.div`
  margin-bottom: 3rem;
`;

const Logo = styled.img``;

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const Item = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.8rem;

  transition: var(--tr);

  :not(:last-child) {
    margin-right: 2rem;
  }

  :hover {
    color: var(--color-red);
  }
`;

const Socials = styled.div`
  display: flex;
  margin-top: 5rem;
`;

const Social = styled.div`
  :not(:last-child) {
    margin-right: 2rem;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;

    margin-top: 3rem;
  }
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const AddItem = styled.span`
  font-size: 1.6rem;
  color: hsla(0, 0%, 100%, 0.6);

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Copy = styled.div`
  margin-top: 3rem;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <LogoCont>
          <Logo src={logo} />
        </LogoCont>

        <List>
          <Item to="/my-team-wp">home</Item>
          <Item to="/about">about</Item>
        </List>

        <Socials>
          <Social>
            <IoLogoFacebook className="socials " />
          </Social>
          <Social>
            <IoLogoPinterest className="socials" />
          </Social>
          <Social>
            <IoLogoTwitter className="socials" />
          </Social>
        </Socials>
      </Left>

      <Right>
        <Address>
          <AddItem>987 Hillcrest Lane</AddItem>
          <AddItem>Irvine, CA</AddItem>
          <AddItem>California 92714</AddItem>
          <AddItem>Call Us: 949-833-7432</AddItem>
        </Address>

        <Copy>
          <AddItem>Copyright 2022. All Rights Reserved</AddItem>
        </Copy>
      </Right>
    </Container>
  );
};

export default Footer;
