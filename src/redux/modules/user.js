import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// 액션

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const LOAD_TOKEN = "LOAD_TOKEN";

// 초기값

const initialState = {
    is_login: false,
  };

// 액션 생성 함수

const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const loadToken = createAction(LOAD_TOKEN, (boo) => ({boo}));

// 미들웨어
// 토큰로드 액션
const loadTokenFB = () => {
  return function (dispatch) {
    if (getCookie("Authorization")) {
      dispatch(loadToken());
    }
  };
};

// 로그인 액션
const loginDB = (userId, userPw) => {
  return function (dispatch, getState, {history}) {
    axios
      .post("http://3.38.179.73/user/login", {
        
        userId: userId,
        userPw: userPw,
      })
      .then(response => {
        console.log(response);
        dispatch(
          logIn({
            is_login: true,
          })
        );
        setCookie("Authorization", response.headers.authorization.split(" ")[1]);
        history.replace("/todoList");
        // window.location.reload();
      })
      
      .catch(error => {
        window.alert("아이디 또는 비밀번호를 확인해주세요.")
        console.log("Login Error", error)
      })
  }
}

// 회원가입 액션
const signupDB = (userId, userPw, pwCheck) => {
  return function (dispatch, getState, {history}) {
    axios
    .post("http://3.38.179.73/user/join", {
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
        setCookie("is_login", "success");
        // draft.token = action.payload.user.token;
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("Authorization");
        deleteCookie("is_login");
				draft.is_login = false;
      }),
    [LOAD_TOKEN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
  logIn,
  logOut,
  loginDB,
  signupDB,
  loadTokenFB,
};

export { actionCreators };

