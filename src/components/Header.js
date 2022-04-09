import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements/Index";

const Header = (props) => {

  return (
    <React.Fragment>
      <Grid width = "100vw" min = "345px">

      <HeaderSt>
        <div>
          <Text
            bold size="24px"
            >Hello, 000님</Text>
        </div>
        <div>
          <Link to="/">
          <Button
            bg="#755139"
            width="80px"
            text="로그아웃"
            bold="900"
            radius = "3px"
            color = "#F2EDD7"
            // margin넣기
          />
          </Link>
        </div>
      </HeaderSt>
      </Grid>
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
    bold : 900;
  }

`

export default Header;