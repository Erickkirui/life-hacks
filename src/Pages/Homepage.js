import React from 'react';
import Tabs from '../Components/Tabs';

function Homepage() {
  return (
    <div>
      <div className='home-container' >
        <h4>COMMUNITY-SOURCED</h4>
        <img src='images/lifehacklogo.jpg' alt="life hack" />
        <p>Welcome to our treasure trove of community-sourced Life Hacks! Here, <br />you'll find ingenious solutions and clever shortcuts contributed by people just like you</p>
        <p style={{ opacity: '0.6' }} >created by <a href="https://erickkirui.netlify.app/">erick kirui</a></p>
      </div>
      <div className='tabs-home-container'>
        <Tabs />
      </div>
    </div>
  );
}

export default Homepage;
