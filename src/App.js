import { useRef, useState } from 'react'
import { ClassComponents } from './Components/ClassComponents'
import { PostList } from './Components/PostList'
import { Counter } from './Components/Counter'
import { PostItem } from './Components/PostItem'
import './styles/App.css'
import { MyButton } from './Components/UI/MyButton'
import { MyInput } from './Components/UI/MyInput'
import { PostFotm } from './Components/PostFotm'
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript', body: 'Description' },
    { id: 3, title: 'Javascript', body: 'Description' },
    { id: 4, title: 'Javascript', body: 'Description' },
  ])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const ButtonDelet = (id) => {
    setPosts(posts.filter((el) => el.id !== id))
  }

  return (
    <div className='App'>
      <PostFotm create={createPost} />
      <hr/>
<div>
  <select>
    <option value='value1' ></option>
  </select>
</div>

      {
        posts.length ?
      <PostList
      posts={posts}
      title='Список попстов'
      ButtonDelet={ButtonDelet}
      />
      :
      <h1 style={{textAlign: 'center'}} >ничего нет</h1>
    }
    </div>
  )
}

export default App
