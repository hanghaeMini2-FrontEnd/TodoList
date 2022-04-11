import React from "react";
import styled from "styled-components";
import {Grid, Text, Input, Button} from "../elements/Index";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Singup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");

  const signup = () => {
    dispatch(userActions.signupDB(id, pwd, pwdCheck));
  }

  return (
    <React.Fragment>
      <Grid padding="30px"/>
      <Grid min = "350px" width = "50vw" margin = "auto" bg = "#F2EDD7" radius = "10px">
        <DivSt>
          <Grid margin="16px"/>
          <Grid padding="0px 16px">
            <Text bold = "900" size="36px">회원가입</Text>
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
          </Grid>
          
          <Grid margin="20px 0px 0px 0px">
            <Grid margin="10px 0px 0px 0px" padding="0px 16px">
              <Button bg = "#755139" text="회원가입하기" color = "#F2EDD7" bold = "900" onClick={signup}/>
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