// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // 클라이언트 주소
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // 클라이언트로부터 메시지를 받았을 때
    socket.on('chat message', (msg) => {
        console.log('Message received on server:', msg); // 서버에서 메시지 수신 확인
        io.emit('chat message', msg); // 모든 클라이언트에 메시지 전송
        console.log('Message broadcasted to all clients'); // 전송 확인
    });

    // 클라이언트가 연결 해제할 때
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
