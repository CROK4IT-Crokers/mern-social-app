import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './chatOnline.css'

function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([])
  const [onlineFriends, setOnlineFriends] = useState([])
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get('/users/friends/' + currentId)
      setFriends(res.data)
    }

    getFriends()
  }, [currentId])

  // console.log('friends', friends)

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)))
  }, [friends, onlineUsers])

  const handleClick = async (user) => {
    try {
      // Fetch conversation
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      )
      setCurrentChat(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='chatOnline'>
      {onlineFriends.map((o) => (
        <div className='chatOnlineFriend' onClick={() => handleClick(o)}>
          <div className='chatOnlineImgContainer'>
            <img
              className='chatOnlineImg'
              src={
                o?.profilePicture
                  ? PF + o.profilePicture
                  : PF + 'person/noAvatar.png'
              }
              // src='https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png'
              alt=''
            />
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='chatOnlineName'>{o?.username}</span>
        </div>
      ))}
    </div>
  )
}

export default ChatOnline
