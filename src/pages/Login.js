import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Grid, Text, Input, Button } from "../elements/Index"

const Login = (props) => {

  return (
    <React.Fragment>
      <Grid min = "350px">
        <DivSt>
        <Grid width="auto" margin="16px">
          <Grid padding="0px 16px">
            <Text blod size="36px">로그인</Text>
          </Grid>
          <Grid margin="20px 0px 0px 0px" padding="16px">
            <Input
              type="text"
              label="아이디"
              placeholder="아이디를 입력하세요."  
            ></Input>
          </Grid>
          <Grid padding="16px">
            <Input
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력하세요."  
            ></Input>
          </Grid>
          <Grid margin="10px 0px 20px 0px" padding="16px">
            <Button bg="#02343F" text="로그인하기"/>   
          </Grid>
        </Grid>
        </DivSt>
      </Grid>
    </React.Fragment>
    
  );
};

const DivSt = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`

export default Login;