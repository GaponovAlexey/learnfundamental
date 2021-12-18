import React, { useContext } from 'react'
import { MyContext } from '../Components/Context/Context'
import { MyButton } from '../Components/UI/MyButton'

export const About = () => {
  return (
    <div className='about'>
      На этом сайте реализация подгрузки постов из
      https://jsonplaceholder.typicode.com/ свайпы при добавлении и
      удалении, автоматическая загрузка постов при опускании вниз! навигациия и фейковая регистрация. 
    </div>
  )
}
