import React, { useState, useEffect } from 'react';
import './section.module.css';
import { Card } from '@mui/material'; 
import Tarjeta from './Cards'; 

const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 898) + 1; // Genera un ID aleatorio entre 1 y 898
};

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState({});
    const [id, setId] = useState(getRandomPokemonId);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // hacemos la petición get
            .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
            .then(data => setPokemon({
                numero: data.id,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                imgJuego: data.sprites.front_default,
                imgCvg: data.sprites.other.dream_world.front_default,
                nombre: data.name,
                experiencia: data.base_experience,
                hp: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                especial: data.stats[3].base_stat,
            }));
    }, [id]); // Agregar `id` como dependencia para que el `useEffect` se ejecute cuando `id` cambie

    return (
        <div>
        <h1>POKÉMONES</h1>
        <h2>Entra en el mundo de Pokémon, donde cada batalla es una aventura, cada encuentro es una oportunidad, y cada entrenador tiene una historia que contar. 
            Descubre la magia de capturar criaturas únicas, entrenarlas para ser las mejores y forjar lazos inquebrantables con tus compañeros de equipo. Explora vastos territorios llenos de misterio y desafíos, 
            donde cada esquina esconde una nueva sorpresa y cada combate te acerca más a convertirte en el Maestro Pokémon que siempre has soñado ser. Únete a nosotros en este viaje épico y demuestra que en el 
            mundo de Pokémon, la verdadera fuerza reside en el corazón y la valentía de cada entrenador.</h2>
        <article>
            {/* Asigno valores a las variables de la función tarjeta */}
            <Tarjeta 
                // Título
                title={pokemon.nombre}
                // Texto  
                text={pokemon.numero}
                // Imagen 
                imgSrc={pokemon.img} 
            />
        </article>
        </div>
    );
};
