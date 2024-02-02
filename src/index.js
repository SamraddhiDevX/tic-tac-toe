import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TicTacBoard from './Components/TicTacBoard';
import TicTacBoard1 from './Components/TicTacBoard1';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "play-area-1",
    element:  <TicTacBoard></TicTacBoard>,
  },
  {
    path: "play-area-2",
    element:  <TicTacBoard1></TicTacBoard1>,
  },
]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
