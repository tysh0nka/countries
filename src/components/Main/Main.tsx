import React, {ReactChild, ReactChildren} from 'react';
import styled from "styled-components";
import {Container} from "../Container/Container";

const Wrapper = styled.main`
    padding: 2rem 0;
  
  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

type PropsType = {
    children: any;
}

function Main({children}: PropsType) {
    // @ts-ignore
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    );
}

export default Main;