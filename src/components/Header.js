import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements/Index";

const Header = (props) => {

  return (
    <React.Fragment>
      <HeaderSt>
        <div>
          <Text
            bold size="24px"
            >Hello, 000님</Text>
        </div>
        <div>
          <Button
            bg="#02343F"
            width="60px"
            text="로그인"
            // margin넣기
          />
          <Button
            bg="#02343F"
            width="70px"
            text="회원가입"
          />
        </div>
      </HeaderSt>
    </React.Fragment>
  );
};

const HeaderSt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  div {
    padding-right: 20px;
    padding-left: 20px;
  }

`

export default Header;