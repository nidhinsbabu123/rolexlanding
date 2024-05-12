import React from 'react'
import Nav from './Nav'
import Welcomevideo from './Welcomevideo'
import Headroom from 'react-headroom'
import Explore from './Explore'
import SecondNav from './SecondNav'
import Watchlist from './Watchlist'
import Footer from './Footer'

function Landing() {
    return (
        <div>

            <Headroom>

                <Nav />

            </Headroom>

            <Welcomevideo />

            <Explore />

            <Headroom disableInlineStyles>

                <div className='secondnav'>

                    <SecondNav/>

                </div>

            </Headroom>



            <Watchlist />

            <Footer/>






        </div>
    )
}

export default Landing