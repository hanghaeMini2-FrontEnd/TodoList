import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Header from "../components/Header";
import { Grid, Input } from "../elements/Index"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {useDispatch, useSelector} from "react-redux"
import {todoLoadFB} from "../redux/modules/todo";

const TodoList = (props) => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [EmodalOpen, setEModalOpen] = useState(false);

  console.log(EmodalOpen)

  const openEModal = () => {
    setEModalOpen(true);
  };
  const closeEModal = () => {
    setEModalOpen(false);
  };

  return (
    <React.Fragment>

      <Header></Header>

      <AddBtn onClick={openModal}>Todo!</AddBtn>

      <Grid margin = "180px 0px 0px 0px"></Grid>
      
      <Card openEModal={openEModal} open={EmodalOpen} close={closeEModal} header="Todo List"></Card>

      {/* header 부분에 텍스트를 입력한다. */}
      <Modal open={modalOpen} close={closeModal} header="Todo List">
        {/* // Modal.js  */}
        <main>
          <Grid>
            
          </Grid>
        </main>
        {/* 에 내용이 입력된다. 리액트 함수형 모달 */}
        {/* 팝업창입니다.*/}
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
  font-weight: 900;
`



export default TodoList;



