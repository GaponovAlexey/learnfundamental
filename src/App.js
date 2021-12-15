import { useEffect, useState } from 'react';
import { AppRouter } from './Components/AppRouter'
import { MyContext } from './Components/Context/Context'
import { Navbar } from './Components/UI/Navbar.jsx/Navbar'
import './styles/App.css'

function App() {
 const [isAuth, setISAUTH] = useState(false);
 
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setISAUTH(!isAuth)
    }
  },[])

  return (
    <div>
      <MyContext.Provider value={{
        isAuth,
        setISAUTH
      }} >
        <Navbar />
        <AppRouter />
      </MyContext.Provider>
    </div>
  )
}

export default App
