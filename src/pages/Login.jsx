import React, { useContext } from 'react'
import { MyContext } from '../Components/Context/Context'
import { MyButton } from '../Components/UI/MyButton'
import { MyInput } from '../Components/UI/MyInput'

export const Login = () => {
  const { setISAUTH, isAuth } = useContext(MyContext)
  const login = (e) => {
    e.preventDefault()
    setISAUTH(!isAuth)
    localStorage.setItem('auth', 'true')
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput type='text' placholder='login' />
        <MyInput type='password' placholder='password' />
        <MyButton>send</MyButton>
      </form>
    </div>
  )
}
