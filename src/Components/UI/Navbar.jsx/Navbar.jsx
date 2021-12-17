import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../Context/Context'

export const Navbar = () => {
  const { setISAUTH, isAuth } = useContext(MyContext)
  const relog = (e) => {
    // e.preventDefault()
    setISAUTH(!isAuth)
    localStorage.removeItem('auth')
  }
  return (
    <div>
      <div className='navbar'>
        <div className='navbar__links'>
          {isAuth ? (
            <button onClick={() => relog()}>Relog</button>
          ) : (
            <button>login</button>
          )}
          <Link to='/about'>o сайте</Link>
          <Link to='/posts'>Посты</Link>
        </div>
      </div>
    </div>
  )
}
