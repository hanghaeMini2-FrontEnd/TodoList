import React from "react";
import styled from "styled-components";

const Input = (props) => {



  return (
    <React.Fragment>
      
      <Inputbox>ddd</Inputbox>
      
    </React.Fragment>
  );
};


Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "입력해주세요",
  type: "text",
  _onChange: () => {},
};

const Inputbox = styled.input`
  border: 1px solid rgb(138, 135, 135);
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;