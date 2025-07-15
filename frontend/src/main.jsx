import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import ResumeBuilder from './Pages/ResumeBuilder.jsx';
import Landing from './Pages/Landing.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/ai-resume-builder" element={<ResumeBuilder/>} />
    </Routes>
  </BrowserRouter>,
)
