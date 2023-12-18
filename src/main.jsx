import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import './todoapp.css';
import { StrictMode } from 'react';
import { UserProvider } from 'context/Auth/authIn';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserProvider>
            <App />
        </UserProvider>
    </StrictMode>
);
