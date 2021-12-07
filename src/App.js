import { useRef, useState } from 'react'
import { ClassComponents } from './Components/ClassComponents'
import { PostList } from './Components/PostList'
import { Counter } from './Components/Counter'
import { PostItem } from './Components/PostItem'
import './styles/App.css'
import { MyButton } from './Components/UI/MyButton'
import { MyInput } from './Components/UI/MyInput'
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript', body: 'Description' },
    { id: 3, title: 'Javascript', body: 'Description' },
    { id: 4, title: 'Javascript', body: 'Description' },
  ])

  const [title, setTitl] = useState('')
  const [body, setBod] = useState('')
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body,
    }
    setPosts([...posts, newPost])
    setBod('')
    setTitl('')
  }
  // setPosts({ ...posts, ...{id: 6, title: title, body: bod} })
  return (
    <div className='App'>
      <form>
        <MyInput
          type='text'
          placeholder='Название'
          value={title}
          onChange={(e) => setTitl(e.target.value)}
        />
        <MyInput
          type='text'
          placeholder='Описание'
          value={body}
          onChange={(e) => setBod(e.target.value)}
        />
        <MyButton  onClick={addNewPost}>
          отправить
        </MyButton>
      </form>
      <PostList posts={posts} title='Список попстов' />
    </div>
  )
}

export default App
