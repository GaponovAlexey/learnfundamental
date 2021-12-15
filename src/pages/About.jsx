import React, { useContext } from 'react'
import { MyContext } from '../Components/Context/Context'
import { MyButton } from '../Components/UI/MyButton'

export const About = () => {
  const {setISAUTH, isAuth}  = useContext(MyContext)
  const relog = (e) => {
    e.preventDefault()
    setISAUTH(!isAuth)
    localStorage.removeItem('auth')
  }
  return (
    <div>
      About
      <MyButton onClick={relog } >relog</MyButton>
    </div>
  )
}
