import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../pages/About'
import { Login } from '../pages/Login'
import { Nothing } from '../pages/Nothing'
import { Post } from '../pages/Post'
import { MyContext } from './Context/Context'
import { PostPages } from './PostPages/PostPages'

export const AppRouter = () => {
  const {setISAUTH, isAuth} = useContext(MyContext)
  return (
    <div>
      <Routes >
        {isAuth ? (
          <>
            <Route  path='/posts' element={<Post />} />
            <Route path='/about' element={<About setISAUTH={setISAUTH} isAuth={isAuth} />} />
            <Route path='/posts/:id' element={<PostPages />} />
            <Route path='*' element={<Nothing />} />
          </>
        ) : (
          <>
            <Route path='/login' element={<Login setISAUTH={setISAUTH} isAuth={isAuth} />} />
            <Route path='/*' element={<Login />} />
          </>
        )}
      </Routes>
    </div>
  )
}
