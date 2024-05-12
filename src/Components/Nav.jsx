import { DragHandle} from '@mui/icons-material';
import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Heart, MapPin, Search } from 'react-feather';

function Nav() {
    return (
        <div>
            <Navbar className='firstnavbar'>
                <div itemType='button' className='menuoption'>
                    <DragHandle className='menuicon' />
                    <span className='text-white ms-1'>Menu</span>
                </div>

                <Container>
                    {/* <Navbar.Brand> */}

                    <div className='logo'>
                        <img
                            alt=""
                            src={require('./images/logotwo.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {/* {' '} */}

                    </div>
                    {/* </Navbar.Brand> */}

                </Container>

                <div className='nav-group'>
                    
                    <div class="nav-content">
                        <a><Search color='white'/><span className='text-white ms-1'>Search</span></a>
                        <a><MapPin color='white' /><span className='text-white ms-1'>Store locator</span></a>
                        <a><Heart color='white'/><span className='text-white ms-1'>Favourites</span></a>
                    </div>


                </div>


            </Navbar>
        </div>
    )
}

export default Nav