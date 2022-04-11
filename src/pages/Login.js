import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Input, Button } from "../elements/Index";
import todo99 from '../shared/99todoLogo.png';
import { useDispatch } from "react-redux";

const Login = (props) => {

  return (
    <React.Fragment>
      <Grid width = "50vw" margin = "auto" min = "350px" bg = "#F2EDD7" radius = "10px">
        <DivSt>
          <Grid width="auto" margin="16px">
            <Grid padding="30px 16px">
              <img src={todo99} alt="todo99"/>
            </Grid>
            
            <Grid margin="20px 0px 0px 0px" padding="0px 16px">
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

            <Grid margin="10px 0px 0px 0px" padding="0px 16px">
              <Link to="/TodoList">
                <Button bg = "#755139" text="로그인하기" color = "#F2EDD7" bold = "900"/>   
              </Link>
            </Grid>

            <Grid margin="0px 0px 20px 0px" padding="16px">
              <Link to="/Signup">
                <Button bg = "#755139" text="회원가입하기" color = "#F2EDD7" bold = "900"/>   
              </Link>
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
  margin-top: 150px;
  margin-bottom: 50px;
`

export default Login;