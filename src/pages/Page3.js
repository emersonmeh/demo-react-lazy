import React, {lazy, Suspense, useState} from 'react';
import BButton from '../components/Button';
import Loading from '../components/Loading';
import axios from 'axios';

const SimpleCard = lazy(() => import('../components/Card').then(module => ({default: module.SimpleCard}) ));

const publicApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});


const Page2 = () => {
    const [showCard, setShowCards] = useState(false);
    const [data, setData] = useState([]);


    const GetPokemons = async () => {
        await publicApi.get('pokemon?limit=1000')
            .then(pokemon => {
                const result = pokemon.data.results;

                const table = result.map(pokemon => {
                    return  {id: pokemon.name, name: pokemon.name, url: pokemon.url}
                })

                setData(table);
            })
    };


    const handleClick = (event) => {
        GetPokemons();
        setShowCards(true);
    };

    const ShowCards = () => {
        return (
            data.map(pokemon => (
                <div style={{padding: '10px', marginBottom: '8px'}}>
                    <SimpleCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                </div>
            ))
        )
    };


    return (
        <div>
            {showCard && (
                <div className="page2_wrapper">
                    <Suspense fallback={<Loading />} >
                        {ShowCards()}
                   </Suspense>
                </div>
            )}
            <br />
            <div>
                <BButton text="Show me the Cards" onClick={handleClick} />
            </div>
        </div>
    )
}

export default Page2;