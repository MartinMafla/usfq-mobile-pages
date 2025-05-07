// src/main.tsx (modificado)
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/usfq-mobile-pages">
    <App />
  </BrowserRouter>
);