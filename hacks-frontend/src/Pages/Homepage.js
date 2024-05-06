import React from 'react'
import Tabs from '../Components/Tabs'

function Homepage() {
  return (
    <div >
      <div className='home-container'>
        <h4>COMMINITY-SOURCED </h4>
        <img src='images/lifehacklogo.jpg' alt="life hack" />
        <p>Welcome to our treasure trove of community sourced Life Hacks!
            Here, <br></br>you'll find ingenious solutions an clever shortcuts contributed by peaople 
            just like you
        </p>
      </div>
        <div  className='tabs-home-container'>
          <Tabs />
       </div>
    </div>
  )
}

export default Homepage
