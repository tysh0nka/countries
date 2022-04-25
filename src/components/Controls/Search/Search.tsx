import styled from "styled-components";
import {IoSearch} from 'react-icons/io5';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  
  border-radius: 2px;
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;
  
  @media(min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...',
})`
  width: 100%;
  margin-left: 1rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base) ;
  color: var(--color-text);
`;

type SearchPropsType = {
    search: string
    setSearch: (value: string) => void
}

export function Search ({setSearch, search}:SearchPropsType)  {

    return (
        <InputContainer>
            <IoSearch/>
            <Input onChange={e => setSearch(e.target.value)} value={search}/>
        </InputContainer>
    )
}