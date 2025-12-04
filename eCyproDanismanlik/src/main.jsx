import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import AdminRouter from './components/admin/AdminRouter.jsx';
import AnalyticsProvider from './components/AnalyticsProvider.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import Chatbot from './components/Chatbot.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import './index.css';
import { initAnalytics } from './utils/analytics';
import BlogPostPage from './pages/BlogPostPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AnalyticsProvider>
          <Routes>
            <Route path="/admin/*" element={<AdminRouter />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/*" element={<App />} />
          </Routes>
          <CookieBanner onAccept={() => initAnalytics(import.meta.env.VITE_GA_TRACKING_ID)} />
        </AnalyticsProvider>
        <Chatbot />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
