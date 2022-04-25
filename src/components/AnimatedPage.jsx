import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)``;

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const AnimatedPage = ({ children }) => {
  return (
    <Container
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={pageVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </Container>
  );
};

export default AnimatedPage;
