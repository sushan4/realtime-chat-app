import { Server } from "socket.io";


const io = new Server({
  cors: {
    origin: "*",  // Use "*" for development only, restrict for production
    methods: ["GET", "POST"]
  }
});


const generateMsgID = () => Math.random().toString(36).substring(2, 15);

let chatRooms =[
    {
        roomId: "GL-01",
        roomName: "General Chat",
        description:'The general chat room for all users',
        messages: [
            {id:1,
                content: "Welcome to the general chat!",
                sent:'N/A',
                user:'Admin',
            },
            {id:2,
                content: "Hello everyone!",
                sent:'N/A',
                user:'James'}
            
        ]
    },

    {
        roomId: "GL-02",
        roomName: "Promotions",
        description:'The promotions chat room for all users',  
        messages: [
            {id:1,
                content: "Welcome to the promotions chat!",
                sent:'N/A',
                user:'Admin',
            },
            {id:2,
                content: "Follow Charles87 on Instagram!",
                sent:'N/A',
                user:'Charles'}
            
        ]
    }
];

console.log("Chat server started on port 3000");

io.on("connection", (socket) => {
    console.log(`connect:${socket.id}`, socket.request.headers);

    socket.on ("disconnect", () => {
        console.log(`disconnect:${socket.id}`);
    });
    socket.on ('getRooms',()=>{
        console.log(`returning room lists`, chatRooms);
        socket.emit('returnRooms', chatRooms);
    });

    socket.on('connectRoom', (id)=>{
        let chosenRoom = chatRooms.filter((room)=>room.roomId === id);
        socket.join(chosenRoom[0].roomName);
        console.log(`User joined room: ${chosenRoom[0].roomName}`);
        socket.emit('joinedRoom', chosenRoom[0].messages);

    })

    socket.on('newPost', (data)=>{
        const {userMessage, room_id, sender, messageTime} = data;
        let selectedRoom= chatRooms.filter((room)=>room.roomId === room_id);
        const addedMessage = {
            id: generateMsgID(),
            content: userMessage,
            sent: messageTime,
            user: sender
        }
        console.log('New msg', addedMessage);
        socket.to(selectedRoom[0].roomName).emit('newMessage', addedMessage);
        selectedRoom[0].messages.push(addedMessage);
        io.to(selectedRoom[0].roomName).emit('newMessage', selectedRoom[0].messages);
         
    })

})

io.listen(3000);