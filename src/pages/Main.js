import React from 'react';
import styled from 'styled-components'
import {Grid} from '../elements/Index'
import { history } from '../redux/configureStore';
import todo99 from '../shared/99todo1.png'
import "./Main.css"

const Main = (props) => {
  return (
    <React.Fragment>
      <Grid padding="100px">
        <DivSt>
          <img src={todo99} alt="todo99"/>
          <div
            className = 'pulsate-fwd'

            style={{
            width: "70px",
            height: "60px",
            backgroundColor: "red",
            clipPath: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',
          }}
            onClick={() => {
              history.push('/login')
            }}
          ><p className='p'>click me!</p></div>
        </DivSt>
      </Grid>
    </React.Fragment>
  )
};

const DivSt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Main;