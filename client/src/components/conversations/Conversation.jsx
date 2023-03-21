import React from 'react'
import './conversation.css'

function Conversation() {
  return (
    <div className='conversation'>
      <img
        className='conversationImg'
        src='https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png'
        alt=''
      />
      <span className='conversationName'>John Doe</span>
    </div>
  )
}

export default Conversation
