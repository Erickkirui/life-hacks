import React from 'react'
import Tabs from '../Components/Tabs'

function Homepage() {
  return (
    <div >
      <div className='home-container'>
        <h1>Community-sourced Life Hacks</h1>
        <p>Welcome to our treasure trove of community sourced Life Hacks!
            Here, <br></br>you'll find ingenious solutions an clever shortcuts contributed by peaople 
            just like you
        </p>
      </div>
      <div>
        <Tabs />
    </div>
    </div>
  )
}

export default Homepage
