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

const SET_TODO = "SET_TODO";  // 완료
const ADD_TODO = "ADD_TODO";  // 완료
const EDIT_TODO = "EDIT_TODO";  // 
const DELETE_TODO = "DELETE_TODO";  // 

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
const editTodo = createAction(EDIT_TODO, (planId, post) => ({planId, post}));


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

// export const deleteTodoFB = (planId) => {
//   return function (dispatch, getState, {history}) {
//     if(!planId) {
//       window.alert("포스트 아이디가 없습니다!")
//     }
//     const myToken = getCookie("Authorization");
//     axios({
//       method: "delete",
//       url: `http://3.38.179.73/api/plan/${planId}`,
//       headers: {
//         Authorization: `Bearer ${myToken}`
//       },
//       data: {
//         planId: planId,
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       const plan_idx = getState().todo.todos.findIndex(
//         (p) => p.planId === planId
//       );
//       const _todo = getState().post.list.filter((item, index) => {
//           return index !== plan_idx;
//       });            
//         dispatch(deleteTodo(_todo));
//       })
//     .catch((err) => {
//       console.log("서버에러: ", err)
//     })
//   }
// }

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

// export const deleteTodoFB = (planID) => {
//   return function (dispatch, getState, { history }) {
//     const myToken = getCookie("Authorization") //
//     console.log(myToken) // 
//       axios.delete(`http://3.38.179.73/api/plan/${planID}`, //
//       {headers: { 'Authorization' : `Bearer ${myToken}`}}) //
//       // .postDelete(planID)
//       .then(function (response) {
//         console.log(response)
//         dispatch(deleteTodo(response.data));
//         history.replace("/postList");
//       })
//       .catch(function (err) {
//         alert("삭제 실패");  //
//       });
//   };
// };


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
      draft.todos.content.unshift(action.payload.post_list);
    }),

    [DELETE_TODO]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.planId)
        draft.todos.content = draft.todos.content.filter((p) =>  p.planId !== action.payload.planId);
      }),

    [EDIT_TODO]: (state, action) =>
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