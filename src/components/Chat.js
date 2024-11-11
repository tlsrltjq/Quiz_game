// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // 서버 주소

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // 서버로부터 메시지 받기
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        // 컴포넌트가 언마운트될 때 소켓 연결 해제
        return () => {
            socket.off('chat message');
        };
    }, []);

    const sendMessage = () => {
        if (input.trim()) {
            socket.emit('chat message', input); // 서버로 메시지 보내기
            setInput('');
        }
    };

    return (
        <div className="chat">
            <h2>채팅</h2>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="메시지를 입력하세요..."
            />
            <button onClick={sendMessage}>전송</button>
        </div>
    );
};

export default Chat;
