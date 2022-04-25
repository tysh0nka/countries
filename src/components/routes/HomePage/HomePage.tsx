import React, {useEffect, useState} from 'react';
import axios from "axios";
import {CountriesType} from "../../../App";
import List from "../../List/List";
import Card from "../../List/Card/Card";
import Controls from "../../Controls/Controls";

type PropsType = {
    countries: Array<CountriesType>
    setCountries: (value: Array<CountriesType>) => void
}

function HomePage({countries, setCountries}: PropsType) {

    const [filteredCounties, setFilteredCounties] = useState<Array<CountriesType>>(countries)

    console.log(countries)

    useEffect(()=> {
        setFilteredCounties(countries)
    }, [countries])

    const handleSearch = (search?: string, region?: string) => {
        let data = [...countries]
        if (region) {
            data = data.filter(c => c.region.includes(region))
        }
        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCounties(data)
    }

    useEffect(() => {
        if (!countries.length) {
            axios.get('https://restcountries.com/v2/all?fields=name,capital,flags,population,region').then(
                ({data}) => setCountries(data)
            )
        }
    }, [])

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {filteredCounties.map(c => {
                        const countyInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {title: "Population", description: c.population.toLocaleString()},
                                {title: "Region", description: c.region},
                                {title: "Capital", description: c.capital}
                            ]
                        };

                        return <Card key={c.name} {...countyInfo}/>
                    }
                )}
            </List>
        </>
    );
}

export default HomePage;