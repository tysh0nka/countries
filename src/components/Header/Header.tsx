import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import {IoMoon} from "react-icons/io5";

import {Container} from "../Container/Container";
import {Link} from "react-router-dom";

const HeaderEL = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Tittle = styled(Link).attrs({to: '/'})`
  color: var(--color-text);
  text-decoration: none;
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  cursor: pointer;
  text-transform: capitalize;
`;

function Header() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <HeaderEL>
            <Container>
                <Wrapper>
                    <Tittle>Where is the world?</Tittle>
                    <ModeSwitcher onClick={toggleTheme}>
                        <IoMoon/>
                        <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEL>
    );
}

export default Header;