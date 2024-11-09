// src/routes/Router.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import QuizPage from '../pages/QuizPage';

function AppRouter() {
    return (
        <Router>
            <Routes>
                {/* "/" 경로로 이동하면 MainPage를 렌더링 */}
                <Route path="/" element={<MainPage />} />
                {/* "/quiz" 경로로 이동하면 QuizPage를 렌더링 */}
                <Route path="/quiz" element={<QuizPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
