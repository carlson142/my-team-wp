import React from "react";

import styled from "styled-components";
import AnimatedPage from "../components/AnimatedPage";
import ContactOne from "../components/ContactSection/ContactOne";

const Container = styled.section`
  display: flex;
`;

const ContactPage = () => {
  return (
    <AnimatedPage>
      <Container>
        <ContactOne />
      </Container>
    </AnimatedPage>
  );
};

export default ContactPage;
