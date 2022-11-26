import React from 'react';

import './Button.css';

const Button = props => {
 console.log(props.isvalid)

  return (
    <button type={props.type} className={`button ${!props.isvalid?'invalid':''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
