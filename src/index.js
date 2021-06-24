import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'index.css';
import App from 'App';
import { FileProvider } from 'context/fileContext'

ReactDOM.render(
  <React.StrictMode>
    <FileProvider>
      <App />
    </FileProvider>
  </React.StrictMode>,
  document.querySelector('body')
);
