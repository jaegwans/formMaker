import React from 'react';
import Main from 'router/Main';
import Preview from 'router/Preview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/preview" element={<Preview />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
