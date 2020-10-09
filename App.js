import React from 'react'
import style from 'style.css'
import Buttons from './Buttons'

function App() {
    return  (
        <div>
            <div className="wrapper">
                <Buttons btn = {{
                        class: "default",
                        text: "Default",
                        textContent: "<Button />"
                    }}
                />
                <Buttons btn = {{
                        class: "default default_hover default_focus",
                        text: "Default",
                        textContent: "&:hover, &:focus"
                    }}
                />
            </div>
            <div className="wrapper">
                <Buttons 
                    btn = {{
                        class: "default variant_outline",
                        text: "Default",
                        textContent: "<Button variant='outline' />"
                    }}
                />
                <Buttons 
                    btn = {{
                        class: "default variant_outline__hover variant_outline__focus",
                        text: "Default",
                        textContent: "&:hover, &:focus"
                    }}
                />
            </div>
            <div className="wrapper">
                <Buttons 
                    btn = {{
                        class: "default variant_text",
                        text: "Default",
                        textContent: "<Button variant='text' />"
                    }}
                />
                <Buttons 
                    btn = {{
                        class: "default variant_text__hover variant_text__focus",
                        text: "Default",
                        textContent: "&:hover, &:focus"
                    }}
                />
            </div>
            <div>
                <Buttons btn = {{
                        class: "default disableshadow",
                        text: "Default",
                        textContent: "<Button disableShadow />"
                    }}
                />
            </div>
        </div>
    )
}

export default App