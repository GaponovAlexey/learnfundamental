import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../pages/About'
import { Nothing } from '../pages/Nothing'
import { Post } from '../pages/Post'
import { PostPages } from './PostPages'

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/posts' element={<Post />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts/:id' element={<PostPages />} />
        <Route path='*' element={<Nothing />} />
      </Routes>
    </div>
  )
}
