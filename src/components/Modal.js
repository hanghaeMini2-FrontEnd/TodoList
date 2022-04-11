import React from "react";
import "./Modal.css"

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Input from "../elements/Input";
import Star from "../elements/star";
import { useDispatch } from "react-redux";
import { actionCreators as todoActions } from "../redux/modules/todo";

const Modal = (props) => {

  const dispatch = useDispatch();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [stars, setStars] = React.useState("");


  const todoAdd = () => {
    dispatch(todoActions.addTodoFB(title, content, stars));
  }

  // const history = useHistory();
  
  const { open, close, header } = props;
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
            <Input 
              margin = "10px auto" 
              bg = "#f7f6eb" 
              border = "none" 
              placeholder = "제목을 입력해주세요!"
              _onChange = {(e) => {setTitle(e.target.value)}}
            ></Input>

            <Input 
              margin = "10px auto" 
              bg = "#f7f6eb" 
              border = "none" 
              height = "200px" 
              placeholder = "Todo 내용을 알려주세요!"
              _onChange = {(e) => {setContent(e.target.value)}}
            ></Input>

            <Star _onClick = {(e, idx) => {setStars(idx.target.value)
            console.log("ddd")
              }            
            }></Star>
            </main>
            <footer>
              <button className="close" 
                onClick={todoAdd}
              >
                등록하기
              </button>
            </footer>
          </section>
        ) 
      : null }
    </div>
  );
};

export default Modal;