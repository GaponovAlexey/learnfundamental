import React from 'react'
import cl from './Mymoda.module.css'
export const MyModal = ({ visible, setVisible, children }) => {
  const rootClasses = [cl.myModal]
  if (visible) {
    rootClasses.push(cl.active)
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(!visible)}>
      <div
        style={{ textAlign: 'right', background: 'black' }}
        className={cl.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={() => setVisible(!visible)}>&#215;</div>
        {children}
      </div>
    </div>
  )
}
