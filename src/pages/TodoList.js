import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { Grid , Text, Input, Button} from "../elements/Index"
import { useState } from "react";

const TodoList = (props) => {

  const [투두, 투두변경] = useState([
    {
      planId : 1,
      title : "카드 완성",
      text : "오늘 끝내자 오늘 끝내자 오늘 끝내자",
      rank : "어려움",
    },
    {
      planId : 2,
      title : "카드 실패",
      text : "오류 안나게 해주세요",
      rank : "쉽나..?",
    },
    {
      planId : 3,
      title : "제발제발제발제발",
      text : "한번만한번만한번만한번만",
      rank : "어려워",
    }
  ])

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <Button width = "80px" text = "로그아웃" bg = "#02343F" color = "#F0EDCC"></Button>
      <AddBtn onClick={openModal}>앙</AddBtn>
      <Card 투두={투두}></Card>

      {/* header 부분에 텍스트를 입력한다. */}
      <Modal open={modalOpen} close={closeModal} header="Todo List">
        {/* // Modal.js  */}
        <main>
        <Input placeholder = "제목을 입력해주세요!" style={{width : "100px", margin : "5px auto"}}></Input>
        <Input placeholder = "Todo 내용을 알려주세요!" style={{width : "100px", margin : "5px auto"}}></Input>
        </main>
        {/* 에 내용이 입력된다. 리액트 함수형 모달 */}
        {/* 팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요! */}
      </Modal>

    </React.Fragment>
    
  );
};

let AddBtn = styled.div`
  width : 50px;
  height : 50px;
  border-radius : 50%;
  position : fixed;
  bottom : 10px;
  right : 10px;
  background-color : black;
  align-items: center;
  justify-content: center;
  display: flex;
  color : white;
  font-size : 30px;
`

export default TodoList;



