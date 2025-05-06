import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Accommodate from './week2/Accommodate';
import Timer from './components/Timer';
import TodoList from './components/TodoList';
import ConfirmButton from './week3/ConfirmButton';
import LandingPage from './week3/LandingPage';
import AttendanceBook from './week3/AttendanceBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList/>
  </React.StrictMode>
);

reportWebVitals();