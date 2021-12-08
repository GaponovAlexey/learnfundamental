import React from 'react'
import { MyInput } from './UI/MyInput'
import { MySelect } from './UI/MySelect'


export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value })}
        placeholder='поиск'
      />
      <MySelect
        defaultValue='сортировка по'
        value={filter.sort}
        onChange={seletcetSort => setFilter({...filter, sort: seletcetSort})}
        option={[
          { value: 'title', name: 'По названиею' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  )
}
