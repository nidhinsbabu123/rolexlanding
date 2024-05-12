import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap'

function SecondNav() {
    return (
        <div className='container-fluid'>
            <div className='secondnavbuttons'>
                <Row className='pt-4'>
                    <Col lg={4}></Col>

                    <Col lg={4}>

                        <Nav className="justify-content-center" activeKey="/home">
                            <Nav.Item>
                                <a href="/home">All</a>
                            </Nav.Item>
                            <Nav.Item>
                                <a className=' ms-5' eventKey="link-1">Classic</a>
                            </Nav.Item>
                            <Nav.Item>
                                <a className=' ms-5' eventKey="link-2">Professional</a>
                            </Nav.Item>
                            <Nav.Item>
                                <a className=' ms-5' eventKey="link-2">Watches by theme</a>
                            </Nav.Item>

                        </Nav>

                    </Col>

                    <Col lg={4}>
                        <div className='configurebutton'>
                            <button>Configure</button>
                        </div>
                    </Col>

                </Row>




            </div>

        </div>
    )
}

export default SecondNav