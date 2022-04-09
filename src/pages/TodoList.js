import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Star from "../elements/star";
import { Grid , Text, Input, Button} from "../elements/Index"
import { useState } from "react";

const TodoList = (props) => {

  const [투두, 투두변경] = useState([
    {
      planId : 1,
      title : "맥주맥주맥주맥주맥주맥주맥주",
      text : "오늘 끝내자 오늘 끝내자",
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

      <Header></Header>

      <AddBtn onClick={openModal}>Todo!</AddBtn>

      <Grid margin = "100px 0px 0px 0px"></Grid>
      
      <Card 투두={투두}></Card>

      {/* header 부분에 텍스트를 입력한다. */}
      <Modal open={modalOpen} close={closeModal} header="Todo List">
        {/* // Modal.js  */}
        <main>
          <Grid>
            <Input margin = "10px auto" bg = "#f7f6eb" border = "none" placeholder = "제목을 입력해주세요!"></Input>
            <Input margin = "10px auto" bg = "#f7f6eb" border = "none" height = "200px" placeholder = "Todo 내용을 알려주세요!"></Input>
            <Star></Star>
          </Grid>
        </main>
        {/* 에 내용이 입력된다. 리액트 함수형 모달 */}
        {/* 팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요! */}
      </Modal>

    </React.Fragment>
    
  );
};

let AddBtn = styled.div`
  width : 60px;
  height : 60px;
  border-radius : 50%;
  position : fixed;
  bottom : 20px;
  right : 20px;
  background-color : #755139;
  align-items: center;
  justify-content: center;
  display: flex;
  color : #F2EDD7;
  font-size : 17px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  font-weight: 900
`



export default TodoList;



