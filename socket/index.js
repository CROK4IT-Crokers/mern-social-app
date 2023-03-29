const io = require('socket.io')(8900, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

let users = []

// to filter and check no repeated users
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId })
}

// get User
const getUser = (userId) => {
  return users.find((user) => user.userId === userId)
}

// Remove user from users[] after disconnection
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId)
}

// When Connect
io.on('connection', (socket) => {
  console.log('a user connected.')
  // send something to user
  //   io.emit('welcome', 'hello this socket server!')

  // After every connection, take userId and socketId from user (take something from client)
  socket.on('addUser', (userId) => {
    addUser(userId, socket.id)
    io.emit('getUsers', users)
  })

  // send and get message
  // Take Event from the client and then send it to the specefic user
  socket.on('sendMessage', ({ senderId, receiverId, text }) => {
    // find the user by Id
    const user = getUser(receiverId)
    // after that, we send the message to this user
    io.to(user.socketId).emit('getMessage', {
      senderId,
      text,
    })
  })

  // When disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected!')
    removeUser(socket.id)
    io.emit('getUsers', users)
  })
})
