import React from 'react'
import style from 'style.css'
import Buttons from './Buttons'

function App() {
    return  (
        <div className="main">
            <div className="section">
                <p>{`<Button />`}</p>
                <Buttons color="default">
                    Default
                </Buttons>
            </div>
            <div className="section">
                <p>{`<Button variant="outline" />`}</p>
                <Buttons variant="outline">
                    Default
                </Buttons>
            </div>
            <div className="section">
            <p>{`<Button variant="text" />`}</p>
                <Buttons variant="text">
                    Default
                </Buttons>
            </div>
            <div className="section">
                <p>{`<Button disabledShadow />`}</p>
                <Buttons disabledShadow color="primary">Default</Buttons>
            </div>
            <div className="wrapper">
                <div className="section">
                    <p>{`<Button disabled />`}</p>
                    <Buttons disabled>
                        Disabled
                    </Buttons>
                </div>
                <div className="section">
                    <p>{`<Button variant="text" disabled />`}</p>
                    <Buttons variant="text" disabled>
                        Disabled
                    </Buttons>
                </div>
            </div>
            <div className="wrapper">
                <div className="section">
                    <p>{`<Button startIcon="local_grocery_store" />`}</p>
                    <Buttons startIcon="local_grocery_store" color="primary">
                        Default
                    </Buttons>
                </div>
                <div className="section">
                    <p>{`<Button endIcon="local_grocery_store" />`}</p>
                    <Buttons endIcon="local_grocery_store" color="primary">
                        Default
                    </Buttons>
                </div>
            </div>
            <div className="wrapper">
                <div className="section">
                    <p>{`<Button size="sm" />`}</p>
                    <Buttons size="sm" color="primary">
                        Default
                    </Buttons>
                </div>
                <div className="section">
                    <p>{`<Button size="md" />`}</p>
                    <Buttons size="md" color="primary">
                        Default
                    </Buttons>
                </div>
                <div className="section">
                    <p>{`<Button size="lg" />`}</p>
                    <Buttons size="lg" color="primary">
                        Default
                    </Buttons>
                </div>
            </div>
            <div className="wrapper">
                <div className="section">
                    <p>{`<Button color="default" />`}</p>
                    <Buttons color="default">
                        Default
                    </Buttons>
                </div>
                <div className="section">
                    <p>{`<Button color="primary" />`}</p>
                    <Buttons color="primary">
                        Default
                    </Buttons>
                </div>
                <div className="section">
                    <p>{`<Button color="secondary" />`}</p>
                    <Buttons color="secondary">
                        Secondary
                    </Buttons>
                </div>
                <div className="section">
                    <p>{`<Button color="danger" />`}</p>
                    <Buttons color="danger">
                    Danger
                    </Buttons>
                </div>
            </div>
        </div>
    )
}

export default App