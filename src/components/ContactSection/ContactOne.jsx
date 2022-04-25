import React, { useState } from "react";
import styled from "styled-components";

import top from "../../img/bg-pattern-about-2-contact-1.svg";
import bot from "../../img/bg-pattern-contact-2.svg";

import { contactFAQ } from "../../data";
import ContactFAQ from "./ContactFAQ";
import CustomInput from "./CustomInput/CustomInput";

const Container = styled.div`
  display: flex;
  width: 100vw;

  padding: 10rem;
  padding-top: 0;

  position: relative;

  @media (max-width: 1250px) {
    padding: 10rem 5rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    padding: 10rem 3rem;
  }
`;

const ImgTopCont = styled.div`
  position: absolute;
  top: 0;
  left: -10rem;

  @media (max-width: 500px) {
    display: none;
  }
`;

const ImgBotCont = styled.div`
  position: absolute;
  bottom: 0;
  right: -10rem;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Img = styled.img``;

const Left = styled.div`
  flex: 0 0 50%;

  display: flex;
  flex-direction: column;

  padding-left: 7rem;

  @media (max-width: 1024px) {
    padding-left: 0;
  }
`;

const Title = styled.h2`
  font-size: 6rem;

  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 3rem;
  color: var(--color-red);

  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const FAQCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 1;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5rem;

  @media (max-width: 768px) {
    padding: 5rem 0rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background-color: transparent;
  color: white;
  border: none;

  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 600;

  outline: none;
  cursor: text;

  border-bottom: 1px solid white;

  transition: var(--tr);

  :focus {
    border-bottom: 1px solid var(--color-rapture-blue);
  }
`;

const ErrorContainer = styled.div`
  color: var(--color-red);
  font-size: 1.6rem;

  margin-top: 1rem;
`;

const ContactOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const messageHandler = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const validation = () => {
    name === ""
      ? setNameError((state) => (state = true))
      : setNameError((state) => (state = false)) ||
        email === "" ||
        !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ? setEmailError((state) => (state = true))
      : setEmailError((state) => (state = false)) || message === ""
      ? setMessageError((state) => (state = true))
      : setMessageError((state) => (state = false));
  };

  return (
    <Container>
      <ImgTopCont>
        <Img src={top} />
      </ImgTopCont>

      <Left>
        <Title>Contact</Title>
        <SubTitle>Ask us about</SubTitle>
        <FAQCont>
          {contactFAQ.map((faq) => (
            <ContactFAQ key={faq.id} {...faq} />
          ))}
        </FAQCont>
      </Left>

      <Right>
        <FormContainer>
          <InputContainer>
            <CustomInput
              type={"text"}
              value={name}
              placeholder={"Name"}
              required={true}
              change={nameHandler}
            />
            {nameError && (
              <ErrorContainer>This field is required!</ErrorContainer>
            )}
          </InputContainer>

          <InputContainer>
            <CustomInput
              type={"email"}
              value={email}
              placeholder={"Email Address"}
              required={true}
              change={emailHandler}
            />
            {emailError && (
              <ErrorContainer>Please use a valid email address!</ErrorContainer>
            )}
          </InputContainer>

          <InputContainer>
            <CustomInput type={"text"} placeholder={"Company Name"} />
          </InputContainer>

          <InputContainer>
            <CustomInput type={"text"} placeholder={"Title"} />
          </InputContainer>

          <InputContainer>
            <TextArea
              value={message}
              placeholder="Message"
              required={true}
              rows="3"
              onChange={messageHandler}
            />
            {messageError && (
              <ErrorContainer>This field is required!</ErrorContainer>
            )}
          </InputContainer>

          <CustomInput
            type={"submit"}
            value={"submit"}
            validation={validation}
          />
        </FormContainer>
      </Right>

      <ImgBotCont>
        <Img src={bot} />
      </ImgBotCont>
    </Container>
  );
};

export default ContactOne;
