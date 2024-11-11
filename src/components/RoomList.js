// RoomList.js
import React from 'react';

const rooms = [
    { id: 1, name: 'Room 1', status: '대기 중', participants: 3 },
    { id: 2, name: 'Room 2', status: '진행 중', participants: 5 },
    { id: 3, name: 'Room 3', status: '대기 중', participants: 2 },
];

const RoomList = () => {
    return (
        <div className="room-list">
            <h2>방 목록</h2>
            <ul>
                {rooms.map((room) => (
                    <li key={room.id}>
                        <span>{room.name} - {room.status} ({room.participants}명)</span>
                        <button onClick={() => alert(`${room.name}에 입장합니다.`)}>입장</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;
