import React from "react";
import styled from "styled-components";
import signup99 from "../shared/signup.png"
import {Grid, Text, Input, Button} from "../elements/Index";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { idCheck, passwordCheck } from "../shared/LoginCheck";

const Singup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");

  const signup = () => {
    if(id === "" || pwd === "" || pwdCheck === "") {
      window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    dispatch(userActions.signupDB(id, pwd, pwdCheck));
  }

  return (
    <React.Fragment>
      <Grid padding="30px"/>
      <Grid min = "350px" width = "50vw" margin = "auto" bg = "#F2EDD7" radius = "10px">
        <DivSt>
          <Grid margin="16px"/>
          <Grid padding="10px 16px">
              <img src={signup99} alt="signup99"/>
          </Grid>
          
          <Grid margin="0px 0px 0px 0px" padding="8px 16px">
            <Input
              type="text"
              label="아이디"
              placeholder="아이디를 입력하세요."
              _onChange={(e) => {
                setId(e.target.value);
                // console.log(e.target.value)
              }} 
            ></Input>
            {idCheck(id) ? (<p style={{fontSize: "12px", color: "green"}}>형식에 맞는 아이디입니다.</p>) : null}
            {!idCheck(id) ? (<p style={{fontSize: "12px", color: "red"}}> 2~ 10자 한글, 영문, 숫자 가능, 특수문자 -_ 가능</p>) : null}
          
          </Grid>
          
          <Grid padding="8px 16px">
            <Input
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력하세요."  
              _onChange={(e) => {
                setPwd(e.target.value);
                // console.log(setPwd)
              }} 
            ></Input>
            {passwordCheck(pwd) ? (<p style={{fontSize: "12px", color: "green"}}>형식에 맞는 비밀번호입니다.</p>) : null}
            {!passwordCheck(pwd) ? (<p style={{fontSize: "12px", color: "red"}}>6~20자 영문 숫자 필수, 특수문자 !@#$%^&* 가능</p>) : null}
          </Grid>
          
          <Grid padding="8px 16px">
            <Input
              type="password"
              label="비밀번호확인"
              placeholder="비밀번호를 다시 입력하세요."  
              _onChange={(e) => {
                setPwdCheck(e.target.value);
                // console.log(setPwd)
              }} 
            ></Input>
            {(pwd !== pwdCheck) && (pwd.length >= 1) ? (<p style={{fontSize: "12px", color: "red"}}>비밀번호가 일치하지 않습니다.</p>) : null}
            {(pwd === pwdCheck) && (pwd.length > 5) ? (<p style={{fontSize: "12px", color: "green"}}>비밀번호가 일치합니다.</p>) : null}
          </Grid>
          
          <Grid margin="20px 0px 0px 0px">
            <Grid margin="10px 0px 0px 0px" padding="0px 16px">
              <Button bg = "#755139" text="ID 중복확인 및 회원가입하기" color = "#F2EDD7" bold = "900" onClick={signup}/>
            </Grid>
            <Grid margin="0px 0px 40px 0px" padding="16px">
              <Button bg = "#755139" color = "#F2EDD7" bold = "900" text="홈으로 가기" onClick={() => {
                history.push('/');
              }}/>
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

export default Singup;