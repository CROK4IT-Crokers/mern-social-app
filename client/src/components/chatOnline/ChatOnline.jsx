import React from 'react'
import './chatOnline.css'

function ChatOnline() {
  return (
    <div className='chatOnline'>
      <div className='chatOnlineFriend'>
        <div className='chatOnlineImgContainer'>
          <img
            className='chatOnlineImg'
            src='https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png'
            alt=''
          />
          <div className='chatOnlineBadge'></div>
        </div>
        <span className='chatOnlineName'>John Doe</span>
      </div>
      <div className='chatOnlineFriend'>
        <div className='chatOnlineImgContainer'>
          <img
            className='chatOnlineImg'
            src='https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png'
            alt=''
          />
          <div className='chatOnlineBadge'></div>
        </div>
        <span className='chatOnlineName'>John Doe</span>
      </div>
      <div className='chatOnlineFriend'>
        <div className='chatOnlineImgContainer'>
          <img
            className='chatOnlineImg'
            src='https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png'
            alt=''
          />
          <div className='chatOnlineBadge'></div>
        </div>
        <span className='chatOnlineName'>John Doe</span>
      </div>
    </div>
  )
}

export default ChatOnline
