import React from 'react'
import {Logo} from '../Logo'
import {Link} from '@reach/router'
import {Nav} from './styles'
export const NavBar = () => {
    return(
    <Nav>
        <Logo/>
        <Link to='/login'>Iniciar Sesión</Link>

    </Nav>
    )
   
}