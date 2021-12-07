import React from 'react'

export const PostItem = ({id, ...props}) => {
  return (
    <div>
      <div className='post'>
        <div className='post__content'>
          <strong>
            {props.number}.{props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className='post__btns'>
          <button onClick={() => props.ButtonDelet(props.post.id)} >delet</button>
        </div>
      </div>
    </div>
  )
}
