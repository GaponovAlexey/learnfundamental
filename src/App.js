import { useMemo, useState } from 'react'
import { PostList } from './Components/PostList'
import './styles/App.css'
import { PostFotm } from './Components/PostFotm'
import { MySelect } from './Components/UI/MySelect'
import { MyInput } from './Components/UI/MyInput'
import { PostFilter } from './Components/PostFilter'
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Java', body: 'good' },
    { id: 2, title: 'Go', body: 'Forever' },
    { id: 3, title: 'Javascript', body: 'TheBest' },
    { id: 4, title: 'Rast', body: 'Perfect' },
  ])
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  })

  const sortedPost = useMemo(() => {
    console.log('visov')
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearcedPosts = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    )
  }, [filter.query, sortedPost])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const ButtonDelet = (id) => {
    setPosts(posts.filter((el) => el.id !== id))
  }

  return (
    <div className='App'>
      <PostFotm create={createPost} />

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearcedPosts}
        title='Список постов'
        ButtonDelet={ButtonDelet}
      />
    </div>
  )
}

export default App
