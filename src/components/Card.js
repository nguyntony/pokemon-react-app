import {useEffect, useState} from 'react'

export default function Card({pokeName, setPokeName, answer}) {
    // I will make a api call that will grab a single card and render an img

    const [pokemon, setPokemon] = useState('')


    // https://pokeapi.co/api/v2/pokemon/1
    const fetchPokemon = async () => {
        const id = Math.floor(Math.random() * 151)
        // console.log(id)
        const url = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const response = await url
        const data = await response.json()
        // console.log(data)
        const pokeImg = data.sprites.other['official-artwork']['front_default']
        // console.log(typeof pokeImg)
        const pokemonName = data.name
        console.log(pokemonName)
        setPokemon(pokeImg)
        setPokeName(pokemonName)
    }

    useEffect(() => {
        fetchPokemon()
    }, [answer])


    return (
        <>
            <div className="img-container">
                <img src={pokemon} alt='poke pic'/>
            </div>
        </>
    )
}