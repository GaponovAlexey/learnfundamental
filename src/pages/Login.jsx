import React from 'react'
import { MyButton } from '../Components/UI/MyButton'
import { MyInput } from '../Components/UI/MyInput'

export const Login = ({setISAUTH, isAuth}) => {
  
  return (
    <div>
      <h1>Login</h1>
      <form>
        <MyInput type='text' placholder='login' />
        <MyInput type='password' placholder='password' />
        <MyButton onClick={() => setISAUTH(!isAuth)} >send</MyButton>
      </form>
    </div>
  )
}
