import React from 'react';
import '../index.css'
const Button = (props) => {
  return (
    <>
      <button className={`btn btn--${props.kind}`}
        data-id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={props.handleClick}>
        <h4>{props.label}</h4>
      </button>
      <div className="button-cus">Let's start</div>
    </>
  )
}
export default Button;