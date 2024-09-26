import React from 'react'
import  CardWidget  from '../CartWidget'


export const NavBar = () => {
    return (
        <header className="header"> 
<a href="/" className="logo">Eze</a>
<nav className="navbar">
<a href="/">inicio</a>
<a href="/">categorias</a>
<a href="/">
<CardWidget />
</a>
<a href="/">ingresar</a>


</nav>






        </header>

    )
}

export default NavBar