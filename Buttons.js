import React from 'react'

function Buttons(props) {
    return (
        <div className="btn_container">
            <p>{props.btn.textContent}</p>
            <button className={props.btn.class}>{props.btn.text}</button>
        </div>
    ) 
}

export default Buttons