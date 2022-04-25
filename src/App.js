import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const Container = styled.main`
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

const App = () => {
  const location = useLocation();

  return (
    <Container>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/my-team-wp" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Container>
  );
};

export default App;
