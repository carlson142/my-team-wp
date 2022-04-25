import React from "react";

import styled from "styled-components";

const Input = styled.input`
  padding: 1rem;
  background-color: transparent;
  color: var(--color-rapture-blue);
  border: none;

  font-size: 1.6rem;
  font-weight: 600;

  outline: none;
  cursor: text;

  border-bottom: 1px solid white;

  transition: var(--tr);

  :focus {
    border-bottom: 1px solid var(--color-rapture-blue);
  }

  ${(props) =>
    props.type === "submit" &&
    `
      background-color: white;
      color: var(--color-green);
      cursor: pointer;
      border-radius: 3rem;
      align-self: flex-start;
      padding: 1rem 2.5rem;
      font-family: inherit;
      font-size: 1.8rem;
      border-bottom: none;

      :hover {
         background-color: var(--color-dark-green);
         color: white;
        }
  `}
`;

const CustomInput = ({
  type,
  placeholder,
  required = false,
  value,
  change,
  validation,
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={change}
      onClick={validation}
    ></Input>
  );
};

export default CustomInput;
