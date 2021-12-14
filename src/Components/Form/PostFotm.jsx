import React, { useState } from 'react'
import { MyButton } from '../UI/MyButton'
import { MyInput } from '../UI/MyInput'

export const PostFotm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })
  const AddPosts = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

 
  return (
    <div>
      <form>
        <MyInput
          type='text'
          placeholder='Название'
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MyInput
          type='text'
          placeholder='Описание'
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton onClick={AddPosts}>отправить</MyButton>
      </form>
    </div>
  )
}
