import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import "./styles/style.css";
import {CartProvider} from "./context/context.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)

// Project finished on 28/07/2024
