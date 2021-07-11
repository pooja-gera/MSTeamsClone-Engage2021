const express = require('express');
const app = express();
const server = require('http').Server(app);
const cookieParser = require("cookie-parser");
app.use( express.json());
app.set('view engine','ejs');
const io = require('socket.io')(server);
const {ExpressPeerServer} = require('peer');
const { login, signup, logout, protectRoute, isLoggedIn } = require('./controller/authController');
const { getHome, getJoin, getRoom, getLogin, getSignup } = require('./controller/viewController');
const peerServer = ExpressPeerServer(server,{
    debug:true
});

app.use('/peerjs',peerServer);
app.use(express.static('public'));
app.use( express.json());
app.use(cookieParser());


app.use(isLoggedIn);

app.get("/login",getLogin)
app.get("/signup",getSignup)
app.post("/auth/login",login)
app.post("/auth/signup",signup)

app.get("/",getHome)

app.use(protectRoute)

app.get("/join",getJoin)
app.get("/:room",getRoom);
app.post("/logout",logout);

io.on('connection',(socket)=>{
    socket.on('join-room',(roomId,userId)=>{
        socket.join(roomId);
        socket.to(roomId).emit('user-connected',userId);
        socket.on('disconnect', () => {
            socket.to(roomId).emit('user-disconnected', userId)
        })
    });
});

let port = process.env.PORT || 3030
server.listen(port);
io.listen(4000);