import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Input, Button } from "../elements/Index";
import login99 from "../shared/login.png";
import { useDispatch } from "react-redux";
import {getCookie, setCookie, deleteCookie} from "../shared/Cookie"
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {

  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  // 로그인 함수
  const login = () => {
    if(id === "" || pwd === "") {
      window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    dispatch(userActions.loginDB(id, pwd))
  }

  return (
    <React.Fragment>
      <Grid width = "50vw" margin = "auto" min = "350px" bg = "#F2EDD7" radius = "10px">
        <DivSt>
          <Grid width="auto" margin="16px">
            <Grid padding="10px 16px">
              <img src={login99} alt="login99"/>
            </Grid>
            
            <Grid margin="20px 0px 0px 0px" padding="0px 16px">
              <Input
                type="text"
                value={id}
                label="아이디"
                placeholder="아이디를 입력하세요." 
                _onChange={(e) => {
                  setId(e.target.value);
                  // console.log(e.target.value);
                }} 
              ></Input>
            </Grid>

            <Grid padding="16px">
              <Input
                type="password"
                value={pwd}
                label="비밀번호"
                placeholder="비밀번호를 입력하세요."
                _onChange={(e) => {
                  setPwd(e.target.value);
                  // console.log(e.target.value);
                }} 
              ></Input>
            </Grid>

            <Grid margin="20px 0px 0px 0px" padding="0px 16px">
                <Button
                  bg = "#755139"
                  text="로그인하기"
                  color = "#F2EDD7"
                  bold = "900"
                  onClick={login}
                />   
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