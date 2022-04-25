import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 2rem;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Left = styled.div`
  margin-right: 5rem;
`;

const Img = styled.img``;

const Right = styled.div``;

const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
`;

const ContactFAQ = ({ img, text }) => {
  return (
    <Container>
      <Left>
        <Img src={img} />
      </Left>

      <Right>
        <Text>{text}</Text>
      </Right>
    </Container>
  );
};

export default ContactFAQ;
