import React, {useEffect, useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const publicApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export const TTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        GetPokemons();
    }, []);
    
 
    const GetPokemons = async () => {
        await publicApi.get('pokemon?limit=1118')
            .then(pokemon => {
                const result = pokemon.data.results;

                const table = result.map(pokemon => {
                    return  {id: pokemon.name, name: pokemon.name, url: pokemon.url}
                })

                setData(table);
            })
    };

    const columns = [
        {id: 'id', field: 'name', headerName: 'Name', width: 200},
        {id: 'id', field: 'url', headerName: 'URL', width: 430},
    ]

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={data} columns={columns} pageSize={100}  />
        </div>
    )
};
