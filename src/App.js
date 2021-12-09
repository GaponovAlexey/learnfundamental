import { useMemo, useState } from 'react'
import { PostList } from './Components/PostList'
import './styles/App.css'
import { PostFotm } from './Components/PostFotm'
import { PostFilter } from './Components/PostFilter'
import { MyModal } from './Components/UI/Modal/MyModal'
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
  const [modalof, setMODALOF] = useState(true)

  const sortedPost = useMemo(() => {
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
    setMODALOF(!modalof)
  }

  const ButtonDelet = (id) => {
    setPosts(posts.filter((el) => el.id !== id))
  }

  return (
    <div className='App'>
      <button
      style={{marginTop: '20px'}}
      onClick={() => setMODALOF(!modalof)}>создать пост</button>
      <MyModal visible={modalof} setVisible={setMODALOF}>
        <PostFotm create={createPost} />
      </MyModal>

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
