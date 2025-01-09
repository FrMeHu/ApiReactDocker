import React from 'react'
import style from './header.module.css'

function Header() {
  return (
    <header className={style.cabecera}>
      <figure><img src="../public/Pokelogo.png" alt="pokelogo" /></figure>
    </header>
  )
}

export default Header