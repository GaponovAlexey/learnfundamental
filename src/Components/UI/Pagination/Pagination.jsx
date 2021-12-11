import React from 'react'
import { getPagesArray } from '../../../utils/page'

export const Pagination = ({ totalPage, page, changePage }) => {
  let pageArray = getPagesArray(totalPage)
  return (
    <div>
      {pageArray.map((p) => (
        <span onClick={() => changePage(p)} key={p}>
          {p}
        </span>
      ))}
    </div>
  )
}
