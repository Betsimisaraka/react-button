import React from 'react'
import style from 'style.css'
import Buttons from './Buttons'

function App() {
    return  (
        <div>
            <div>
                <Buttons text="<Button />">
                    Default
                </Buttons>
            </div>
            <div>
                <Buttons variant="outline" text="<Button variant='outline' />">
                    Default
                </Buttons>
            </div>
            <div>
                <Buttons variant="text" text="<Button variant='text' />">
                    Default
                </Buttons>
            </div>
            <div>
                <Buttons disabledShadow text="<Button disabledShadow />">Default</Buttons>
            </div>
            <div className="wrapper">
                <Buttons disabled text="<Button disabled />">
                    Disabled
                </Buttons>
                <Buttons variant="text" disabled text="<Button variant='text' disabled />">
                    Disabled
                </Buttons>
            </div>
            <div className="wrapper">
                <Buttons size="sm" text="<Button size='sm' />">
                    Default
                </Buttons>
                <Buttons size="md" text="<Button size='md' />">
                    Default
                </Buttons>
                <Buttons size="lg" text="<Button size='lg' />">
                    Default
                </Buttons>
            </div>
            <div className="wrapper">
                <Buttons color="default" text="<Button color='default' />">
                    Default
                </Buttons>
                <Buttons color="primary" text="<Button color='primary' />">
                    Default
                </Buttons>
                <Buttons color="secondary" text="<Button color='secondary' />">
                    Secondary
                </Buttons>
                <Buttons color="danger" text="<Button color='danger' />">
                   Danger
                </Buttons>
            </div>
        </div>
    )
}

export default App