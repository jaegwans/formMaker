import React from 'react';
import Main from 'router/Main';
import Preview from 'router/Preview';
import Response from 'router/Response';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/preview" element={<Preview />} />
                <Route path="/response" element={<Response />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
