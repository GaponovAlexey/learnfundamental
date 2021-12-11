import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='navbar__links'>
          <Link to='/about' >o сайте</Link>
          <Link  to='/posts' >Посты</Link>
        </div>
      </div>
    </div>
  )
}
