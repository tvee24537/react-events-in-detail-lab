// Code DelayedButton Component Here
import React from 'react';

const DelayedButton = (props) => {

    const onButtonClick = (event) => {
        event.persist()

        setTimeout(() => {
            props.onDelayedClick(event)
        }, props.delay)
    }

    return (
        <div>
            <button onClick={onButtonClick}>
                Delayed Button
            </button>
        </div>
    )
}

export default DelayedButton; 