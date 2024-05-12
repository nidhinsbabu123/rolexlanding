import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ChevronRight } from 'react-feather'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Explore() {

    useEffect(()=>{
        AOS.init({duration:500});
    },[])

    return (
        <div className='pt-5'>
            <div className='container-fluid p-5'>
                <Row data-aos="fade-up" className='align-items-center'>

                    <Col lg={5} className='ms-5 ps-5'>

                        <h2 className='exploretitle' style={{fontSize:'48px' }}>Explore the Rolex Collection</h2>

                    </Col>

                    <Col></Col>
                    



                    <Col lg={5}>
                        <p style={{textAlign:'justify', fontSize:'20px'}}>The Rolex collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic  models to suit any wrist.</p>

                        <a className='explorelink' href="">Find your Rolex<ChevronRight /></a>
                    </Col>

                    <Col></Col>

                </Row>


            </div>



        </div>
    )
}

export default Explore