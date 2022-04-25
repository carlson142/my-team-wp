import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { IoClose } from "react-icons/io5";
import CustomButton from "./CustomButton";

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;

  background-color: #0000006a;
  z-index: 1000;
`;

const Menu = styled.div`
  height: 100%;
  width: 37rem;

  position: fixed;
  top: 0;
  right: 0;

  background-color: var(--color-midnight-green);

  display: flex;
  flex-direction: column;

  padding: 5rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const IconCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;

  margin-top: 5rem;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: white;

  font-size: 2rem;

  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const BtnCont = styled.div`
  margin-top: 5rem;
`;

const containerVariants = {
  open: { x: 0, opacity: 1 },
  close: { x: 768, opacity: 0 },
};

const MobileMenu = ({ setMenu }) => {
  const nav = useNavigate();

  return (
    <Container
      initial={"close"}
      animate={"open"}
      exit={"close"}
      variants={containerVariants}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <Menu>
        <IconCont>
          <IoClose
            size={25}
            onClick={() => {
              setMenu((prev) => !prev);
            }}
          />
        </IconCont>

        <MenuList>
          <MenuItem
            to="/my-team-wp"
            onClick={() => {
              setMenu((prev) => !prev);
            }}
          >
            home
          </MenuItem>
          <MenuItem
            to="/about"
            onClick={() => {
              setMenu((prev) => !prev);
            }}
          >
            about
          </MenuItem>
        </MenuList>

        <BtnCont>
          <CustomButton
            primary
            onClick={() => {
              nav("/contact");
              setMenu((prev) => !prev);
            }}
          >
            contact us
          </CustomButton>
        </BtnCont>
      </Menu>
    </Container>
  );
};

export default MobileMenu;
