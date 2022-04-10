import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// 액션

const SET_TODO = "SET_TODO";
const ADD_TODO = "ADD_TODO";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";

// 초기값

const initialState = {
  data : [
    {
    planId: 1,
    title: "맥주맥주맥주맥주맥주맥주맥주기본",
    text: "오늘 끝내자 오늘 끝내자기본",
    rank: "어려움기본"
    },
    {
    planId: 2,
    title: "카드 실패기본",
    text: "오류 안나게 해주세요기본",
    rank: "기본..?"
    },
    {
    planId: 3,
    title: "제발제발제발제발기본",
    text: "한번만한번만한번만한번만기본",
    rank: "어려워기본"
    }
    ]
};

// 액션 생성 함수

const setTodo = createAction(SET_TODO, (post_list) => ({post_list}));
const addTodo = createAction(ADD_TODO, (post) => ({post}));
const editTodo = createAction(EDIT_TODO, (post_id, post) => ({post_id, post}));
const deleteTodo = createAction(DELETE_TODO, (post_id) => ({post_id}));

// 미들웨어
// todo 추가 액션

// todo 수정 액션

// todo 삭제 액션



// 리듀서

export default handleActions(
  {
    [SET_TODO]: (state, action) =>
      produce(state, (draft) => {

      }),
    [ADD_TODO]: (state, action) =>
      produce(state, (draft) => {

      }),
    [EDIT_TODO]: (state, action) =>
      produce(state, (draft) => {

      }),
    [DELETE_TODO]: (state, action) =>
      produce(state, (draft) => {

      }),  
  },
  initialState
);

const actionCreators = {
// export 할 것들
  setTodo,
  addTodo,
  editTodo,
  deleteTodo,
};

export { actionCreators };