import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const LOAD_TOKEN = "LOAD_TOKEN";

// 초기값

const initialState = {
    userId : "hello"
  };

// 액션 생성 함수

const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const loadToken = createAction(LOAD_TOKEN, (user) => ({user}));

// 미들웨어

// 로그인 액션
const loginDB = (userId, userPw) => {
  return function (dispatch, getState, {history}) {
    axios
      .post("", {
        userId: userId,
        userPw: userPw,
      })
      .then(response => {
        console.log(response);
      })
  }
}

// 회원가입 액션
const signupDB = (userId, userPw, pwCheck) => {
  return function (dispatch, getState, {history}) {
    axios
    .post("", {
      userId: userId,
      userPw: userPw,
      pwCheck: pwCheck,
    })
    .then(response => {
      console.log(response);
      history.push("/login")
    })
    .catch(error => {
      alert("error 메세지 입력");
      console.log("회원가입 DB Error", error);
    })
  };
};

// 토큰 받기 액션

// 리듀서

export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {

      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {

      }),
    [LOAD_TOKEN]: (state, action) =>
      produce(state, (draft) => {

      }),
  },
  initialState
);

const actionCreators = {
  logIn,
  logOut,
  loginDB,
  signupDB,
};

export { actionCreators };

