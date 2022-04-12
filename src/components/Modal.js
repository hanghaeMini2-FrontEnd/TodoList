import React from "react";
import "./Modal.css"

import Input from "../elements/Input";
import { useDispatch } from "react-redux";
import { actionCreators as todoActions } from "../redux/modules/todo";

const Modal = (props) => {

  const dispatch = useDispatch();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [stars, setStars] = React.useState(0);

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

                <div style = { {width : '200px', height: '40px', margin : '15px auto'} }>
                {Array.from({ length: 5 }, (item, idx) => {
                return (
                <div
                    key={idx}
                    onClick={() => {
                    setStars(idx + 1);
                    }}
                    style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "30px",
                    margin: "5px",
                    float : 'left',
                    textAlign : 'center',
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    backgroundColor: stars < idx + 1 ? "darkgray" : "#f9844a",
                    }}
                >
                
                </div>
                );
            })}
            </div>

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