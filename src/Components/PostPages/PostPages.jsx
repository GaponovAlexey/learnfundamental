import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../../API/PostServise'
import { useFetching } from '../../hook/useFetching'

export const PostPages = () => {
  const params = useParams()
  const [post, setPOST] = useState([])
  const [comments, setCOMMENTS] = useState([])
  console.log(comments)
  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id)
    setPOST(response.data)
  })
  const [fetchingComents] = useFetching(async () => {
    const response = await PostService.getComentsByPostId(params.id)
    console.log(response.data)
    setCOMMENTS(response.data)
  })

  useEffect(() => {
    fetching()
    fetchingComents()
  }, [])
  return (
    <div className='post_pages' >
      {!isLoading ? (
        <h3>
          {post.id} - {post.title}
        </h3>
      ) : (
        <h1>Ничего нет</h1>
      )}
      <h3>
        Comments:{' '}
        {comments.map((com) => (
          <div style={{ marginTop: 15 }}>
            <h6> {com.email}</h6>
            <div>{com.body}</div>
          </div>
        ))}
      </h3>
    </div>
  )
}
