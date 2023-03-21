import React from 'react'
import './message.css'

function Message({ own }) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className='messageTop'>
        <img
          className='messageImg'
          //   src='https://www.tutorialspoint.com/assets/questions/media/426142-1668760765.png'
          src='http://www.jquery-az.com/html/images/banana.jpg'
          alt=''
        />
        <p className='messageText'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className='messageBottom'>1 hour ago</div>
    </div>
  )
}

export default Message
