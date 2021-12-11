import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { PostItem } from './PostItem'

export const PostList = ({ posts, title, ButtonDelet }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={200} classNames='post'>
            <PostItem number={post.id} post={post} ButtonDelet={ButtonDelet} />
           </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
