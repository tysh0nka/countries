import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import {IoArrowBack} from "react-icons/io5";
import Info from "./Info";


const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: 2px;
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 0.75rem;
  border: none;
  color: var(--color-text);
`;

export type CountryType = {
    "name":string,
    "topLevelDomain": string[],
    "alpha2Code":string,
    "alpha3Code":string,
    "callingCodes":string[],
    "capital":string,
    "altSpellings":string[],
    "subregion":string,
    "region":string,
    "population":number,
    "latlng": number[],
    "demonym":string,
    "area":number,
    "gini":number,
    "timezones":string[],
    "borders":string[],
    "nativeName":string,
    "numericCode":string,
    "flags":{
        "svg":string,
        "png":string},
    "currencies":[{"code":string,"name":string,"symbol":string}],
    "languages":[{"iso639_1":string,"iso639_2":string,"name":string,"nativeName":string}],
    "translations":{"br":string,"pt":string,"nl":string,"hr":string,"fa":string,"de":string,"es":string,"fr":string,"ja":string,"it":string,"hu":string},
    "flag":string,
    "regionalBlocs":[{"acronym":string,"name":string,"otherNames": string[]}],"cioc":string,"independent":boolean
}

function Details() {
    // const {name,info, img} = useLocation().state as CardPropsType
    const {name} = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState<CountryType| null>(null)

    useEffect(()=> {
        axios.get(`https://restcountries.com/v2/name/${name}`).then(
            ({data}) => setCountry(data[0])
        )
    }, [name])

    console.log(country)

    return (
        <div>
        <Button onClick={()=> navigate(-1)}>
            <IoArrowBack/>
            Back
        </Button>
            {country && <Info {...country}/>}
        </div>
    );
}

export default Details;