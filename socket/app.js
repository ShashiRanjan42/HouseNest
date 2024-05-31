import { Server } from "socket.io";

const PORT = 4000; // Define the port number

const io = new Server({
  cors: {
    origin: "https://house-nest.vercel.app",
  },
});

let onlineUsers = [];

const addUser = (userId, socketId) => {
  const userExists = onlineUsers.find((user) => user.userId === userId);
  if (!userExists) {
    onlineUsers.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUsers.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("newUser", (userId) => {
    console.log("New user joined:", userId);
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    } else {
      console.log("User not found:", receiverId);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    removeUser(socket.id);
  });
});

io.listen(PORT, () => {
  console.log(`Socket.io server listening on port ${PORT}`);
});
