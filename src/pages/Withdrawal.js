import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Input, Button } from "../elements/Index";
import Withdrawal from "../shared/withdrawal.png";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import WithdrawalModal from "../components/WithdrawalModal"
import { getCookie, deleteCookie } from "../shared/Cookie";

const Login = (props) => {

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);

  // 로그인 함수
  const withdrawal = () => {
    if(id === "" || pwd === "") {
      window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    openModal()
  }

  // 모달 열고 닫기
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <Grid width = "50vw" margin = "auto" min = "350px" bg = "#F2EDD7" radius = "10px">
        <DivSt>
          <Grid width="auto" margin="16px">
            <Grid padding="10px 16px">
              <img src={Withdrawal} alt="Withdrawal"/>
              <p style={{color: "red"}}>회원탈퇴를 위해 아이디와 비밀번호를 정확히 입력해주세요.</p>
            </Grid>

            <Grid margin="10px 0px 0px 0px" padding="0px 16px">
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
                  text="회원탈퇴하기"
                  color = "#F2EDD7"
                  bold = "900"
                  onClick={withdrawal}
                />   
            </Grid>

            <Grid margin="0px 0px 30px 0px" padding="16px">
              <Link to="/login">
                <Button bg = "#755139" text="돌아가기" color = "#F2EDD7" bold = "900"/>   
              </Link>
            </Grid>
            
          </Grid>
        </DivSt>
      </Grid>

      <WithdrawalModal id={id} pwd={pwd} open={modalOpen} close={closeModal} header="회원탈퇴">
        {/* // Modal.js  */}
        <main>
          <Grid>

            

          </Grid>
        </main>
        {/* 에 내용이 입력된다. 리액트 함수형 모달 */}
        {/* 팝업창입니다.*/}
      </WithdrawalModal>
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