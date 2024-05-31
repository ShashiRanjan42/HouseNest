import {Server} from "socket.io";

const io = new Server({
    cors: {
      origin: "https://house-nest.vercel.app/",
    },
  });

let onlineUser = [];

const addUser = (userId, socketId) => {
    const userExits = onlineUser.find((user) => user.userId === userId);
    if(!userExits) {
        onlineUser.push({ userId, socketId});
    }
};

// jb tab close krenge tb socket ko htana hoga
const removeUser = (socketId) => {
    onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

// find user
const getUser = (userId) => {
    return onlineUser.find((user) => user.userId !== userId);
};

io.on("connection", (socket) => {
    socket.on("newUser", (userId) => {
        addUser(userId, socket.id);
    });

    socket.on("sendMessage", ({ receiverId, data }) => {
        const receiver = getUser(receiverId);
        io.to(receiver.socketId).emit("getMessage", data);
    });

    socket.on("disconnect", () => {
        removeUser(socket.id);
    });
});


io.listen("4000");