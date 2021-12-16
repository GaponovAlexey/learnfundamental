import { useEffect, useRef, useState } from 'react'
import PostService from '../API/PostServise'
import { PostList } from '../Components/Item/PostList'
import { MyModal } from '../Components/UI/Modal/MyModal'
import { Pagination } from '../Components/UI/Pagination/Pagination'
import { useFetching } from '../hook/useFetching'
import { usePosts } from '../hook/usePosts'
import '../styles/App.css'
import { getPageCount } from '../utils/page'
import { PostFilter } from '../Components/Filter/PostFilter'
import { PostFotm } from '../Components/Form/PostFotm'

export const Post = () => {
  const [posts, setPosts] = useState([])
  const [modalof, setMODALOF] = useState(false)

  const [totalPage, setTOTALCOUNT] = useState(0)
  const [limit, setLIMIT] = useState(10)
  const [page, setPAGE] = useState(0)
  const lastElement = useRef()
  const observer = useRef()

  const [Fetching, isLoading, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTOTALCOUNT(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        setPAGE(page + 1)
      }
    }
    observer.current = new IntersectionObserver(callback)
    observer.current.observe(lastElement.current)
  }, [isLoading])

  const changePage = (page) => {
    setPAGE(page)
  }

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedAndSearcedPosts = usePosts(posts, filter.sort, filter.query)
  const createPost = (newPost) => {
    setPosts([newPost, ...posts])
    setMODALOF(!modalof)
  }
  const ButtonDelet = (id) => {
    setPosts(posts.filter((el) => el.id !== id))
  }
  useEffect(() => {
    Fetching()
  }, [page])

  return (
    <div className='App'>
      <button
        style={{ marginTop: '20px' }}
        onClick={() => setMODALOF(!modalof)}
      >
        создать пост
      </button>
      <MyModal visible={modalof} setVisible={setMODALOF}>
        <PostFotm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {error && <h1>oштбка: {error}</h1>}
      <PostList
        posts={sortedAndSearcedPosts}
        title='Список постов'
        ButtonDelet={ButtonDelet}
      />
      <div ref={lastElement} style={{ height: 20, background: 'red' }} />
      <div style={{ marginTop: 10 }}>
        <Pagination page={page} changePage={changePage} totalPage={totalPage} />
      </div>
    </div>
  )
}
