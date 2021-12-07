import React from 'react'
import { PostItem } from './PostItem'

export const PostList = ({ posts, title, ButtonDelet }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          number={index}
          post={post}
          key={post.id}
          ButtonDelet={ButtonDelet}
        />
      ))}
    </div>
  )
}
