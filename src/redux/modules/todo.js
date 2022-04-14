import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// 액션

const SET_TODO = "SET_TODO";  // 완료
const ADD_TODO = "ADD_TODO";  // 완료
const EDIT_TODO = "EDIT_TODO";  // 
const DELETE_TODO = "DELETE_TODO";  // 완료

// 초기값

const initialState = {
  todos: [
    {
      id: 2,
      title: "제목123",
      content: "내용321321",
      stars: 5,
      userId: 1,
      created_at : "2022-04-11 15:02:24",
      modifed_at : "2022-04-11 15:02:24"
  }
  ],
};

const initialPost = [{
  title: "제목123",
  content: "내용321321",
  stars: 5,
}]
  
// 액션 생성 함수

const setTodo = createAction(SET_TODO, (post) => ({post}));
const addTodo = createAction(ADD_TODO, (post_list) => ({post_list}));
const deleteTodo = createAction(DELETE_TODO, (planId) => ({ planId }));
const editTodo = createAction(EDIT_TODO, (planId, post_list) => ({planId, post_list}));


// todo 추가 액션
const addTodoFB = (title, content, stars ) => {
  return function (dispatch, getState, {history}) {
    const myToken = getCookie("Authorization")
    console.log(myToken)
    axios.post("http://3.38.179.73/api/plan", {
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
    axios.get('http://3.38.179.73/api/plan?sortBy=stars&isAsc=false&size=100&page=1'
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

export const deleteTodoFB = (planId) => {
  return function (dispatch, getState, {history}) {
    if(!planId) {
      window.alert("포스트 아이디가 없습니다!")
    }
    const myToken = getCookie("Authorization");
    axios({
      method: "delete",
      url: `http://3.38.179.73/api/plan/${planId}`,
      data: {
        planId: planId,
      },
      headers: {
        Authorization: `Bearer ${myToken}`
      },
    })
    .then((response) => {
      console.log(response);
      dispatch(deleteTodo(planId));
    })
    .catch((err) => {
      console.log("서버에러: ", err)
    })
  }
}


// todo 수정 액션

export const editTodoFB = (planId, title, content, stars) => {
  console.log(planId, title, content, stars )
  return function (dispatch, getState, {history}) {
    if(!planId) {
      window.alert("포스트 아이디가 없습니다!")
    }
    const myToken = getCookie("Authorization");
    axios({
      method: "put",
      url: `http://3.38.179.73/api/plan/${planId}`,
      data: {
        planId: planId,
        title : title,
        content : content,
        stars : stars
      },
      headers: {
        Authorization: `Bearer ${myToken}`
      },
    })
    .then((response) => {
      console.log(response);
      dispatch(editTodo(planId, title, content, stars));
    })
    .catch((err) => {
      console.log("서버에러: ", err)
    })
}}





// 리듀서

export default handleActions(
  {
    [SET_TODO]: (state, action) =>
    produce(state, (draft) => {
      draft.todos = action.payload.post;
    }),

    [ADD_TODO]: (state, action) =>

    produce(state, (draft) => {
      draft.todos.content.unshift(action.payload.post_list);
    }),

    [DELETE_TODO]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.planId)
        draft.todos.content = draft.todos.content.filter((p) =>  p.planId !== action.payload.planId);
      }),

    [EDIT_TODO]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.planId)
        draft.todos.content = draft.todos.content.filter((p) =>  p.planId === action.payload.planId);
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