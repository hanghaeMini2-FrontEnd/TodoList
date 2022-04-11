import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Grid, Text, Button } from "../elements/Index";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import todo99 from '../shared/cookieman.png';
import "./Modal.css";

const Header = (props) => {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Grid width = "100vw" min = "345px">

      <HeaderSt>
        <Grid padding="30px 16px" width = "80px">
          <img src={todo99} alt="todo99" className="wobble-hor-bottom"/>
        </Grid>
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
            onClick = {() => {
              window.alert("다음에 또 만나요!");
              dispatch(userActions.logOut());
              history.push('/');
            }}
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