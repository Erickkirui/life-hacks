import React from 'react'
import { MessageCirclePlus } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>

         
           <MessageCirclePlus />
            <button><Link to="/postcheat">Add Cheat</Link></button>   

        </div>
        <div>
            <img src='/images/lifehacklogo.jpg' alt="lifehack logo" />

        </div>
      
    </div>
  )
}

export default Navbar
