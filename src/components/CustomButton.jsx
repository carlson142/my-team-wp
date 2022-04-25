import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: inherit;
  font-size: 1.8rem;

  padding: 1rem 3rem;
  border-radius: 3rem;

  cursor: pointer;
  transition: var(--tr);

  ${(props) =>
    props.primary &&
    `
  color: white;
  background-color: transparent;
  border: 1px solid white;

  :hover {
    background-color: white;
    color: var(--color-dark-green);
  }
  `};

  ${(props) =>
    props.secondary &&
    `
  
  color: var(--color-green);
  background-color: transparent;
  border: 1px solid var(--color-green);

  :hover {
    background-color: var(--color-green);
    color: white;
  }

  `}
`;

const CustomButton = ({ children, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
