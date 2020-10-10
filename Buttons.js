import React from 'react'

function Buttons(props) {
    let defaultBtn = props.color === "default" ? "default" : ""
    let variantOutline = props.variant === "outline" ? "outline" : ""
    let variantText = props.variant === "text" ? "text" : ""
    let disabledShadow = props.disabledShadow && props.color === "primary" ? "disabledshadow" : ""
    let disabled = props.disabled ? "disabled" : ""
    let disabledText = props.disabled && props.variant === "text" ? "disabledText" : ""
    let smSize = props.size === "sm" && props.color === "primary" ? "small" : ""
    let mdSize = props.size === "md" && props.color === "primary" ? "medium" : ""
    let lgSize = props.size === "lg" && props.color === "primary" ? "large" : ""
    let primaryBtn = props.color === "primary" ? "primary" : ""
    let secondaryBtn = props.color === "secondary" ? "secondary" : ""
    let dangerBtn = props.color === "danger" ? "danger" : ""
    let icon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 9c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1zm-5 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.38-6.13c.27-.48.09-1.09-.39-1.36-.48-.26-1.09-.09-1.35.39L15.55 11H8.53L4.54 2.57c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2z" fill="#FFFFFF"/></svg>;
    let startIcons = props.startIcon === "local_grocery_store" ? icon : ""
    let startIconClass = props.startIcon === "local_grocery_store" && props.color === "primary" ? "startIcon" : ""
    let endIcons = props.endIcon === "local_grocery_store" ? icon : ""
    let endIconClass = props.endIcon === "local_grocery_store" && props.color === "primary" ? "endIcon" : ""
    return (
            <button className={`
                                ${defaultBtn}
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
                                ${startIconClass}
                                ${endIconClass}
                            `}>
                        {startIcons} {props.children} {endIcons}</button>
    ) 
}

export default Buttons