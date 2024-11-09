// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
    return (
        <Router>
            <div>
                <h1>Welcome to the Quiz Game</h1>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    {/* 추가 라우트를 여기에 정의할 수 있어요 */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
