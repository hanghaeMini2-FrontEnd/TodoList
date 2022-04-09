import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// 액션

const SET_TODO = "SET_TODO";
const ADD_TODO = "ADD_TODO";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";

// 초기값

const initialState = {

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