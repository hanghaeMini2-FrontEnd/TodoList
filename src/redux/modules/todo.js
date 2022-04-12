import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

import {
  PostAddTodoList,
  PutFixTodoList,
  DelectTodoList,
  LoadCardList,
  AddCardList,
} from "../../shared/todocard";

// 액션

const SET_TODO = "SET_TODO";  // //
const ADD_TODO = "ADD_TODO";  // /
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";

// 초기값

const initialState = {
  todos: [],
};

const initialPost = [{
  title : "",
  content : "",
  stars : 1,
}]
  
// 액션 생성 함수

const setTodo = createAction(SET_TODO, (post_list) => ({post_list}));
const addTodo = createAction(ADD_TODO, (post) => ({post}));
const editTodo = createAction(EDIT_TODO, (post_id, post) => ({post_id, post}));
const deleteTodo = createAction(DELETE_TODO, (post_id) => ({post_id}));


// todo 추가 액션
const addTodoFB = (title, content, stars, ) => {
  return function (dispatch, getState, {history}) {
    const myToken = getCookie("Authorization")
    console.log(myToken)
    axios.post("http://3.38.179.73/api/plan", {
      ...initialPost,
      title : title,
      content : content,
      stars : stars,
    },
    {headers: { 'Authorization' : `Bearer ${myToken}`}}
    )
    .then(
      dispatch(addTodo({title, content, stars}))
    )
    .catch(error => {
      alert("돌아가")
      console.log("어림없어", error)
    })
  }
}


// todo 수정 액션

const editTodoFB = () => {
  return function (dispatch, getState, {history}) {

  }
}


// todo 삭제 액션
const deleteTodoFB = () => {
  return function (dispatch, getState, {history}) {

  }
}



// 리듀서

export default handleActions(
  {
    [SET_TODO]: (state, action) =>
      produce(state, (draft) => {
        draft.todos.unshift(action.payload.post);
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
  initialPost
);

const actionCreators = {
// export 할 것들
  setTodo,
  addTodo,
  editTodo,
  deleteTodo,
  editTodoFB,
  addTodoFB,
  deleteTodoFB,
};

export { actionCreators };