import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import logo from "../img/logo.svg";
import CustomButton from "./CustomButton";

import { IoMenu } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

const Container = styled.header`
  background-color: var(--color-midnight-green);
  padding: 5rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #9e979753;

  @media (max-width: 1024px) {
    padding: 5rem;
  }

  @media (max-width: 500px) {
    padding: 5rem 3rem;
  }

  position: relative;
`;

const LogoCont = styled.div`
  margin-right: 5rem;
`;

const Logo = styled.img``;

const List = styled.ul`
  list-style: none;
  display: flex;

  margin-right: auto;

  @media (max-width: 768px) {
    display: none;
  }
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

const BtnCont = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menu, setMenu] = useState(false);

  console.log(menu);

  const nav = useNavigate();

  return (
    <Container>
      <LogoCont>
        <Logo src={logo} />
      </LogoCont>

      <List>
        <Item to="/my-team-wp">home</Item>
        <Item to="/about">about</Item>
      </List>

      <BtnCont>
        <CustomButton primary onClick={() => nav("/contact")}>
          contact us
        </CustomButton>
      </BtnCont>

      <HamburgerContainer>
        <IoMenu
          size={25}
          onClick={() => {
            setMenu((state) => !state);
          }}
        />
      </HamburgerContainer>

      <AnimatePresence>
        {menu && <MobileMenu setMenu={setMenu} />}
      </AnimatePresence>
    </Container>
  );
};

export default Header;
