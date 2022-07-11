import {useState } from 'react'
import {Navbar, Collapse, NavbarToggler, Nav, NavItem,Row} from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import { FaCoffee, FaBook, FaProjectDiagram, FaAddressCard } from 'react-icons/fa';
import {HashLink as Link} from 'react-router-hash-link';
import './Header.css'



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
 

    return (
        
       <BrowserRouter>
     
        <Navbar dark color='primary' fixed='top' expand='md' >
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
          
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar >
                    <NavItem>
                        <Link className='nav-link slideA ' to='#home' >
                           <FaCoffee /> Home
                        </Link>
                    </NavItem>
                     <NavItem >
                     <Link className='nav-link slideB' to='#about'>
                     <FaBook /> About
                        </Link>
                    </NavItem>
                    <NavItem >
                        <Link className='nav-link slideC smooth' to='#projects'>
                            <FaProjectDiagram /> Projects
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link slideD' to='#contactForm'>
                            <FaAddressCard/> Contact
                        </Link>
                    </NavItem>                 
                </Nav>
            </Collapse>
        </Navbar>
        </BrowserRouter>
    
    )
    };

export default Header;