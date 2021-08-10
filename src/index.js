import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootswatch/dist/quartz/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
      <div class="container">
        <div class="navbar-brand">Money counter</div>
      </div>
    </div>
    <div class="container">
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);