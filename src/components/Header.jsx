import {useState } from 'react'
import {Navbar, Collapse, NavbarToggler, Nav, NavItem,Row} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FaCoffee, FaBook, FaProjectDiagram, FaAddressCard } from 'react-icons/fa';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' fixed='top' expand='md' >
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
          
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar >
                    <NavItem >
                        <NavLink className='nav-link slideA ' to='/'>
                            <FaCoffee /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link slideB' to='/about'>
                            <FaBook /> About
                        </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink className='nav-link slideC' to='/projects'>
                            <FaProjectDiagram /> Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link slideD' to='/contact'>
                            <FaAddressCard/> Contact
                        </NavLink>
                    </NavItem>                 
                </Nav>
            </Collapse>
        </Navbar>
        
    )
    };

export default Header;