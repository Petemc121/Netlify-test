import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom';
import {scrollBehaviourDragImageTranslateOverride} from "mobile-drag-drop/scroll-behaviour";
import {polyfill} from "mobile-drag-drop";
import app from './app.css';

polyfill({
  // use this to make use of the scroll behaviour
  dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});

ReactDOM.render(


  <React.StrictMode>
   
    <App  />
    
  </React.StrictMode>,
  document.getElementById('root')
);

