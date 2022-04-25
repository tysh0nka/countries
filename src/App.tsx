import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import HomePage from "./components/routes/HomePage/HomePage";
import NotFound from "./components/routes/NotFound/NotFound";
import Details from "./components/routes/Details/Details";


export type CountriesType =
    {
        "name": string,
        "capital": string,
        "region": string,
        "population": number,
        "flags": {
            "svg": string,
            "png": string
        },
        "independent": boolean
    }


function App() {

    const [countries, setCountries] = useState<Array<CountriesType>>([])

    return (
        < >
            <Header/>
            <Main>
                <Routes>
                    <Route path='/' element={<HomePage countries={countries} setCountries={setCountries}/>}/>
                    <Route path={'/*'} element={<NotFound/>}/>
                    <Route path='/country/:name' element={<Details/>}/>
                </Routes>
            </Main>
        </>
    );
}

export default App;
