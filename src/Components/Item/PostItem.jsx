import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MyButton } from '../UI/MyButton'

export const PostItem = ({id, ...props}) => {
  const navigate = useNavigate()
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
          <MyButton
          onClick={() => navigate(`/posts/${props.post.id}`)}
          >open</MyButton>
          <MyButton onClick={() => props.ButtonDelet(props.post.id)} >delet</MyButton>
        </div>
      </div>
    </div>
  )
}
