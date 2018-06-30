import React from 'react';

export const Accordion = (props) => {
  return (
    <div className="wrap-collabsible">
      <input id="collapsible" className="toggle" type="checkbox"/>
      <label htmlFor="collapsible" className="lbl-toggle">{props.title}</label>
      <div className="collapsible-content">
        <div className="content-inner">
          {props.children}
        </div>
      </div>
    </div>
  )
}