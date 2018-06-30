import React from 'react';
import { AppContext } from '../AppContext';

export const Modal = () =>
  <AppContext.Consumer>
    { app => 
    <div className="mi-modal">
      <div className="mi-modal-container">
        <div className="mi-modal-header">
          <button onClick={app.fn.closeModal}>x</button>
        </div>
        <div className="mi-modal-body">
          <p>{app.state.modal}</p>
        </div>
        <div className="mi-modal-footer">
          <button onClick={app.fn.closeModal}>OK</button>
        </div>
      </div>
    </div>}
  </AppContext.Consumer>