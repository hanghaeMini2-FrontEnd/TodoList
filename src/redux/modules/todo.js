import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// import {
//   PostAddTodoList,
//   PutFixTodoList,
//   DelectTodoList,
//   LoadCardList,
//   AddCardList,
// } from "../../shared/todocard";

// 액션

const SET_TODO = "SET_TODO";  // 
const ADD_TODO = "ADD_TODO";  // 완료
const EDIT_TODO = "EDIT_TODO";  // 
const DELETE_TODO = "DELETE_TODO";  // 

// 초기값

const initialState = {
  todos: [
  //   {
  //     "id": 2,
  //     "title": "제목123",
  //     "content": "내용321321",
  //     "stars": 5,
  //     "userId": 1,
  //     "created_at" : "2022-04-11 15:02:24",
  //     "modifed_at" : "2022-04-11 15:02:24"
  // }
  ],
};

const initialPost = []
  
// 액션 생성 함수

const setTodo = createAction(SET_TODO, (post) => ({post}));
const addTodo = createAction(ADD_TODO, (post_list) => ({post_list}));
const editTodo = createAction(EDIT_TODO, (post_id, post) => ({post_id, post}));
const deleteTodo = createAction(DELETE_TODO, (post_id) => ({post_id}));


// todo 추가 액션
const addTodoFB = (title, content, stars ) => {
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

// todo 로드 액션

const todoLoadFB = () => {
  return function(dispatch, getState, {history}) {
    const myToken = getCookie("Authorization",
    )
    axios.get('http://3.38.179.73/api/plan?sortBy=stars&isAsc=true&size=100&page=1'
    ,{headers : {"Authorization" : `Bearer ${myToken}`}})
    .then((res) => {
      dispatch(setTodo(res.data));
    })
    .catch((err)=> {
      console.log(err);
    })
  }
}

// todo 삭제 액션
const deleteTodoFB = () => {
  return function (dispatch, getState, {history}) {

  }
}

// todo 수정 액션

const editTodoFB = () => {
  return function (dispatch, getState, {history}) {

  }
}





// 리듀서

export default handleActions(
  {
    [SET_TODO]: (state, action) =>
    produce(state, (draft) => {
      draft.todos = action.payload.post;
    }),


    [ADD_TODO]: (state, action) =>
    produce(state, (draft) => {
      // draft.todos.unshift(action.payload.post_list);
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
  editTodoFB,
  addTodoFB,
  deleteTodoFB,
  todoLoadFB,
};

export { actionCreators };