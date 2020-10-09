import React from 'react'

function Buttons(props) {
    let variantOutline = props.variant === "outline" ? "outline" : ""
    let variantText = props.variant === "text" ? "text" : ""
    let disabledShadow = props.disabledShadow ? "disabledshadow" : ""
    let disabled = props.disabled ? "disabled" : ""
    let disabledText = props.disabled && props.variant === "text" ? "disabledText" : ""
    let smSize = props.size === "sm" ? "small" : ""
    let mdSize = props.size === "md" ? "medium" : ""
    let lgSize = props.size === "lg" ? "large" : ""
    let primaryBtn = props.color === "primary" ? "primary" : ""
    let secondaryBtn = props.color === "secondary" ? "secondary" : ""
    let dangerBtn = props.color === "danger" ? "danger" : ""
    return (
        <div className="btn_container">
            <p>{props.text}</p>
            <button className={`
                ${variantOutline}
                ${variantText}
                ${disabledShadow}
                ${disabled}
                ${disabledText}
                ${smSize}
                ${mdSize}
                ${lgSize}
                ${primaryBtn}
                ${secondaryBtn}
                ${dangerBtn}
                `}>{props.children}</button>
        </div>
    ) 
}

export default Buttons