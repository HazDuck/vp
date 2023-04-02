import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { ProductListingProvider } from './hooks/useProductListing';


const root = ReactDOM.createRoot(document.getElementById('root')  as HTMLElement);
root.render(
  <ProductListingProvider>
    <App />
  </ProductListingProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
