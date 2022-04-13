import React from "react";
import "./Modal.css"
import {history} from "../redux/configureStore"
import Cookieman from "../shared/cookieman.png"
import Grid from "../elements/Grid";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Modal = (props) => {
  const dispatch = useDispatch();
  const { open, close, header, id, pwd } = props;

  console.log(id)
  console.log(pwd)

  const withdrawal = () => {
    dispatch(userActions.withdrawalAC(id, pwd));
  }

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open 
      ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>
              <Grid margin="0px" padding="60px 0px">
                <Grid margin="0px 0px 30px 175px">
                  <img src={Cookieman} alt="Cookieman"/>
                </Grid>
                <p style={{textAlign:"center"}}>탈퇴하면 되돌릴 수 없습니다.</p>
                <p style={{textAlign:"center"}}>정말 탈퇴하시겠습니까?</p>
              </Grid>
            </main>
            <footer>
              <button onClick={withdrawal} className="close">
                탈퇴하기
              </button>
            </footer>
          </section>
        ) 
      : null }
    </div>
  );
};

export default Modal;