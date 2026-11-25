import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';


import App from './App';
import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Every route is prerendered into #root by react-snap. That snapshot is serialized DOM,
// in which adjacent text nodes are merged, so React 18 hydration can never match it: it
// threw errors #418/#423/#425 on each load and then fell back to a client render anyway.
// Render directly instead. The prerendered HTML still provides the first paint and the
// crawler-visible content, and React swaps it for the live tree in a single commit.
createRoot(container).render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
