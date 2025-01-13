import React from 'react'
import styles from './contenido.module.css'
import BarraNav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import {Pokemon}  from './Cardspokemon';
import { Pokemongen1 } from './CardspokemonGen1';
import { Pokemongen2 } from './Cardspokemongen2';
import { Pokemongen3 } from './Cardspokemongen3';
import ImageAvatars from './Avatars1';
import ImageAvatars1 from './Avatars1';
import ImageAvatars2 from './Avatars2';


function Contenido() {
  return (
    <>
      <Router>
        <BarraNav />
        <main>
          {/* ---------------------section------------------------------------------ */}
          <section>
            <Routes>
              <Route exact path="/" element={<Pokemon />} />
              <Route path="/Pokémon" element={<Pokemones />}>
                <Route path="/Pokémon/Generación1" element={<Pokemongen1 />}/>
                <Route path="/Pokémon/Generación2" element={<Pokemongen2 />}/>
                <Route path="/Pokémon/Generación3" element={<Pokemongen3 />}/>
              </Route>


              <Route path="/About" element={<About />}>
                <Route path="/About/Usuario1" element={<Conusuario1 />}/>
                <Route path="/About/Usuario2" element={<Conusuario2 />}/>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </main>
      </Router>
    </>
  )
}



function About() {
  return <div>
  <h1>Información de Contacto</h1>
  <Outlet/>
  </div>
}

function Conusuario1() {
  return <div>
  {<ImageAvatars1/>}
  <h2>Desarrollador:Usuario1</h2>
  </div>
}

function Conusuario2() {
  return <div>
  {<ImageAvatars2/>}
  <h2>Desarrollador:Usuario2</h2>
  </div>
}




// Contenido de Noticias
function Pokemones() {
  return <div>
    <Outlet/>
    </div>
}
























function Producto() {
  //Lectura del parámetro de la URL
  const params = useParams();

  if (params.numero < 1 || params.numero > 100) {
    return <h2>ESE PRODUCTO NO EXISTE</h2>
  }
  return <h2>PRODUCTO ELEGIDO: {params.numero}</h2>;
}
function NotFound() {
  return <h2>ESTA RUTA NO ES VÁLIDA</h2>;
}




export default Contenido;