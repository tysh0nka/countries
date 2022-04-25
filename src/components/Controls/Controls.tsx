import React, {useEffect, useState} from 'react';
import {Search} from "./Search/Search";
import {CustomSelect} from "./CustomSelect/Select";
import styled from "styled-components";


const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
]

const Wrapper = styled.div`
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
   align-items: center; 
  }
`

type PropsType = {
    onSearch: (search?: string, region?: string) => void
}

const Controls = ({onSearch}:PropsType) => {
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState<{value: string, label: string} | ''>('')

    useEffect(()=> {
        // @ts-ignore
        const regionValue = region?.value || '';

        onSearch(search, regionValue)
    }, [search, region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect options={options}
                          placeholder='Filter by Region'
                          isClearable
                          isSearchable={false}
                          value={region}
                          //@ts-ignore
                          onChange={setRegion}
            />
        </Wrapper>
    );
};

export default Controls;
