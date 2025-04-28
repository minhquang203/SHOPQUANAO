import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));  // Đảm bảo rằng 'root' là đúng ID
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
