import React from 'react'

function Watchlist() {
  return (
    <div>
        <div className='firstimage'>

            <ul className='unorderedlist'>
                <li>
                    <img className='imgs' src={require('./images/datejust.png')} alt="" />
                </li>
                <li>
                    <img className='imgs' src={require('./images/submariner.png')} alt="" />
                </li>
                <li>
                    <img className='imgs' src={require('./images/gmtmaster.png')} alt="" />
                </li>
                <li>
                    <img className='imgs' src={require('./images/daydate.png')} alt="" />
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Watchlist