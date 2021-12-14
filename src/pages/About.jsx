import React from 'react'
import { MyButton } from '../Components/UI/MyButton'

export const About = ({setISAUTH, isAuth}) => {
  return (
    <div>
      About
      <MyButton onClick={() => setISAUTH(!isAuth)} >relog</MyButton>
    </div>
  )
}
