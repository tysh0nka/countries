import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {CountryType} from "./Details";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: 400;

`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 767px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 5px 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;
  margin-top: 10px;

`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);

  cursor: pointer;
`;

function Info(props: CountryType) {
    const {
        name,
        nativeName,
        flags,
        capital,
        population,
        region,
        currencies,
        borders,
        languages
    } = props


    const navigate = useNavigate()
    const [neighbors, setNeighbors] = useState([])

    useEffect(()=>{
        axios.get(`https://restcountries.com/v2/alpha?codes=${borders.join(',')}`).then(
                ({data}) => setNeighbors(data.map((m: any) => m.name))
        )
    }, [borders])

    return (
        <Wrapper>
            <InfoImg src={flags.png} alt={name}/>
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Capital</b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Currency</b> {currencies.map(m => m.name)}
                        </ListItem>
                        <ListItem>
                            <b>Languages</b> {languages.map(m => m.name)}
                        </ListItem>
                    </List>
                </ListGroup>
            </div>
            <Meta>
                <b>Border Countries</b>
                {!borders.length ? <span>There is no border countries</span> : <TagGroup>
                    {neighbors.map(b => <Tag onClick={()=> navigate(`/country/${b}`)}>{b}</Tag>)}
                </TagGroup>}
            </Meta>
        </Wrapper>
    );
}

export default Info;