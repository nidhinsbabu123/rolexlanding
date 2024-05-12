import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ExternalLink, Facebook, Instagram, Linkedin, Youtube } from 'react-feather'

function Footer() {
    return (
        <div>
            <div className='container-fluid  mt-5 bg-light'>
                <Row className='pt-5'>
                    <Col lg={3} className='text-center'>
                        <img src={require('./images/Logo_da_Rolex.png')} alt="No image" width={100} height={50} />
                    </Col>

                    <Col lg={3} className='align-items-center'>

                        <h4>Rolex Watches</h4>
                        <ul className='footerlists'>
                            <li>
                                <a href="">New watches 2023</a>
                            </li>
                            <li>
                                <a href="">Find your Rolex</a>

                            </li>
                            <li>
                                <a href="">Configure your Rolex</a>
                            </li>
                            <li>
                                <a href="">Men's watches</a>
                            </li>
                            <li>
                                <a href="">Women's watches</a>
                            </li>
                            <li>
                                <a href="">Gold watches</a>
                            </li>
                        </ul>

                        <h4>The collection</h4>
                        <ul className='footerlists'>
                            <li>
                                <a href="">Air-King</a>
                            </li>
                            <li>
                                <a href="">Cosmograph-Daytona</a>

                            </li>
                            <li>
                                <a href="">Datejust</a>
                            </li>
                            <li>
                                <a href="">Lady-Datejust</a>
                            </li>
                            <li>
                                <a href="">Day-Date</a>
                            </li>
                            <li>
                                <a href="">Explorer</a>
                            </li>
                            <li>
                                <a href="">GMT-Master-2</a>
                            </li>
                            <li>
                                <a href="">Oyester Perpetual</a>
                            </li>
                            <li>
                                <a href="">Sea-Dweller</a>
                            </li>
                            <li>
                                <a href="">Deepsea</a>
                            </li>
                            <li>
                                <a href="">Sky-Dweller</a>
                            </li>
                            <li>
                                <a href="">Submariner</a>
                            </li>
                            <li>
                                <a href="">Yatch-Master</a>
                            </li>
                            <li>
                                <a href="">1908</a>
                            </li>

                        </ul>

                        <h4>Watchmaking</h4>
                        <ul className='footerlists'>
                            <li>
                                <a href="">At the core of excellence</a>
                            </li>
                            <li>
                                <a href="">Behind the seal</a>
                            </li>
                            <li>
                                <a href="">Rolex Anatomy</a>
                            </li>

                        </ul>


                    </Col>

                    <Col lg={3} className='align-items-center'>
                        <h4>Rolex and sports</h4>
                        <ul className='footerlists'>
                            <li>
                                <a href="">Tennis</a>
                            </li>
                            <li>
                                <a href="">Golf</a>
                            </li>
                            <li>
                                <a href="">Yatching</a>
                            </li>
                            <li>
                                <a href="">Motor sport</a>
                            </li>
                            <li>
                                <a href="">Equestrianism</a>
                            </li>

                        </ul>

                        <h4>Perpetual Initiatives</h4>
                        <ul className='footerlists'>
                            <li>
                                <a href="">Perpetual Planet Initiative</a>
                            </li>
                            <li>
                                <a href="">Perpetual Arts Initiative</a>
                            </li>
                        </ul>

                        <h4>About Rolex</h4>
                        <ul className='footerlists'>
                            <li>
                                <a href="">Sustainable development</a>
                            </li>
                            <li>
                                <a href="">Behind the crown</a>
                            </li>
                            <li>
                                <a href="">History</a>
                            </li>
                        </ul>

                        <h4>Buying a Rolex</h4>
                        <ul className='footerlists'>
                            <li>
                                <a href="">Store locator</a>
                            </li>
                            <li>
                                <a href="">Buying a rolex</a>
                            </li>
                            <li>
                                <a href="">Rolex Certified Pre-Owned</a>
                            </li>
                        </ul>

                        <h4>Care and Servicing</h4>
                        <ul className='footerlists'>
                            <li>
                                <a href="">Service Center locator</a>
                            </li>
                            <li>
                                <a href="">Watch care and service</a>
                            </li>

                        </ul>

                    </Col>

                    <Col lg={3} className='align-items-center'>
                        <h4>Services</h4>
                        <ul className='footerlists'>
                            <li>
                                <a href="">Frequently asked questions</a>
                            </li>
                            <li>
                                <a href="">Your favourites</a>
                            </li>
                            <li>
                                <a href="">Newsroom <ExternalLink /> </a>
                            </li>

                        </ul>

                        <h6>Legal notice</h6>
                        <ul className='footerlists'>
                            <li>
                                <a href="">Terms of use</a>
                            </li>
                            <li>
                                <a href="">Privacy notice</a>
                            </li>
                            <li>
                                <a href="">Cookies</a>
                            </li>

                        </ul>

                        <h6>Accessibility</h6>
                        <ul className='footerlists'>
                            <li>
                                <a href="">Read our statement</a>
                            </li>
                        </ul>

                        <h6>Media</h6>
                        <ul className='footerlists'>
                            <li>
                                <a href="">Wallpapers</a>
                            </li>
                            <li>
                                <a href="">Brochures</a>
                            </li>
                            <li>
                                <a href="">Userguides</a>
                            </li>

                        </ul>

                        <h6>Official Channels</h6>
                        <ul className='footerlists'>
                            <li>
                                
                                <a href=""> <Facebook /> Facebook </a>
                                

                            </li>

                            <li>
                                <a href=""> <Instagram /> Instagram </a>
                            </li>

                            <li>
                                <a href=""> <Youtube /> Youtube </a>
                            </li>

                            <li>
                                <a href=""> <Linkedin /> LinkedIn </a>
                            </li>



                        </ul>


                    </Col>



                </Row>

            </div>
        </div>
    )
}

export default Footer