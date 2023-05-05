import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyled from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/Theme/theme';
import { store } from 'app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <GlobalStyled />
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
