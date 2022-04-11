import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션

const SET_TODO = "SET_TODO";  // //
const ADD_TODO = "ADD_TODO";  // /
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";

const LOAD_TODOS_REQ = "todos/LOAD_TODOS_REQ";
const LOAD_TODOS_SUCCESS = "todos/LOAD_TODOS_SUCCESS";

// 초기값

const initialState = {
  data : [
    {
      planId : 1,
      title : "기본값",
      content : "기본값 입니다",
      stars : 3,
      createdAt : "작성일자",
      status : false,
    }
    ]
};

// 액션 생성 함수

const setTodo = createAction(SET_TODO, (post_list) => ({post_list}));
const addTodo = createAction(ADD_TODO, (post) => ({post}));
const editTodo = createAction(EDIT_TODO, (post_id, post) => ({post_id, post}));
const deleteTodo = createAction(DELETE_TODO, (post_id) => ({post_id}));

const loadTodosReq = () => {
  return {
    type: LOAD_TODOS_REQ,
  };
};

const loadTodosSuccess = (payload) => {
  return {
    type: LOAD_TODOS_SUCCESS,
    payload,
  };
};

// 미들웨어

// todoList 가져오기 액션
export const loadTodoFB = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosReq());
    const { data } = await axios.get("http://localhost:3009/posts");
    dispatch(loadTodosSuccess(data));
    console.log(data)
  } catch (error) {
    alert("에러가 발생했습니다. 다시 접속해주세요.");
    dispatch(error);
  }
};


// todo 추가 액션
const addTodoFB = (title, content, stars) => {
  return function (dispatch, getState, {history}) {
    axios.post("http://3.38.179.73/api/plan", {
      title : title,
      content : content,
      stars : stars,
    })
    .then(response => {
      console.log(response);
      history.push("/TodoList")
    })
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
      draft.data = action.payload.data;
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
  loadTodoFB,
  editTodoFB,
  addTodoFB,
  deleteTodoFB,
};

export { actionCreators };