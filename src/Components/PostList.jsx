import React from 'react'
import { PostItem } from './PostItem'

export const PostList = ({posts, title, ButtonDelet}) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}} >{title}</h1>
      {posts.map((post, index) => (
        <PostItem number={index} post={post} kay={post.id} ButtonDelet={ButtonDelet} />
      ))}
    </div>
  )
}
