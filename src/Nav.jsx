import React from 'react';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageIcon from '@mui/icons-material/Image';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function BarraNav() {
  return (
    <Navbar>

        <Nav>
        <Nav.Link as={Link} to="/">
          <HomeIcon style={{ color: 'brown' }}/>Inicio
        </Nav.Link>

        <NavDropdown title={<span><NewspaperIcon style={{ color: 'blue' }}/> Pokémon</span>} id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/Pokémon/Generación1">Generación1</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Pokémon/Generación2">Generación2</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Pokémon/Generación3">Generación3</NavDropdown.Item>

        </NavDropdown>

        <NavDropdown title={<span><AssignmentIndIcon style={{ color: 'green' }}/> Contacto</span>} id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/About/Usuario1">Usuario1</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/About/Usuario2">Usuario2</NavDropdown.Item>

        </NavDropdown>

        </Nav>



    </Navbar>
  );
}

export default BarraNav;





