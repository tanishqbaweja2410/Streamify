import React from 'react'
import Button from './Button'

const list = ["All", "Game", "Songs", "Live", "Cricket", "Soccer", "News", "Valentines", "Songs", "Live", "Cricket", "All", "Game"];

const ButtonList = () => {
  let cnt = 1
  return (
    <div className='flex'>
      {list.map(btn => <Button key={cnt++} name={btn}/>)}
      </div>
  )
}

export default ButtonList