import React, { useEffect, useState } from 'react'
import './conversation.css'
import axios from 'axios'

function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id)

    const getUser = async () => {
      try {
        const res = await axios.get('/users?userId=' + friendId)

        // console.log('+++ user +++: ', res)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [currentUser, conversation])

  return (
    <div className='conversation'>
      <img
        className='conversationImg'
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + 'person/noAvatar.png'
        }
        // src='https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png'
        alt=''
      />
      <span className='conversationName'>{user?.username}</span>
    </div>
  )
}

export default Conversation
