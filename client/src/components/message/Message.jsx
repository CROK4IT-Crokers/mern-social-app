import React from 'react'
import './message.css'
import { format } from 'timeago.js'

function Message({ message, own }) {
  // console.log('message: ', message)
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className='messageTop'>
        <img
          className='messageImg'
          //   src='https://www.tutorialspoint.com/assets/questions/media/426142-1668760765.png'
          src='http://www.jquery-az.com/html/images/banana.jpg'
          alt=''
        />
        <p className='messageText'>{message?.text}</p>
      </div>
      <div className='messageBottom'>{format(message?.createdAt)}</div>
    </div>
  )
}

export default Message
