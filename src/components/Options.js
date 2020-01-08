
import React from 'react'
import Option from './option'
const Options = (props) => 
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>No options added</p>}
            {props.options.map((option) => (
                <Option key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption} />
            ))}
        </div>
    


export default Options