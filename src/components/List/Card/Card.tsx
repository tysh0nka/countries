import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.article`
  border-radius: 2px;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1rem 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 16px;
  text-align: center;
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li``;

export type CardPropsType = {
    img: string
    name: string
    info: Array<any>
}

function Card({img, name, info = []}: CardPropsType) {

    const navigate = useNavigate()

    return (
        <Wrapper onClick={() => navigate(`country/${name}`, {state: {img, name, info}})}>
            <CardImage src={img} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map(el => (
                        <CardListItem key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    );
}

export default Card;