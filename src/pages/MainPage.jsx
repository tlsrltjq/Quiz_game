// src/pages/MainPage.jsx
import React from 'react';
import RoomList from '../components/RoomList';
import Chat from '../components/Chat';
import './MainPage.css';

function MainPage() {
    return (
        <div className="main-page">
            <header className="main-header">
                <h2>퀴즈 게임 메인 페이지</h2>
                <RoomList />
            </header>
            <footer className="main-footer">
                <Chat />
            </footer>
        </div>
    );
}

export default MainPage;
