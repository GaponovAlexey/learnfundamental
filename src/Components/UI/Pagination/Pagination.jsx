import React from 'react'
import { getPagesArray } from '../../../utils/page'

export const Pagination = ({ totalPage, page, changePage }) => {
  let pageArray = getPagesArray(totalPage)

  return (
    <div className='page__wraper'>
      {pageArray.map((p) => (
        <span
          className={page === p ? 'page page__active' :'page'}
          onClick={() => changePage(p)}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  )
}
