import React, { useRef } from 'react';
import './index.css'

function Conversion(props) {
    const inputA = useRef(null);
    const inputB = useRef(null);

    return (
        <div className="conversion-container">
            <div className="from-type">
                <select>
                    <option selected hidden disabled>FROM</option>
                    <option>BINARY</option>
                    <option>OCTAL</option>
                    <option>DECIMAL</option>
                    <option>HEX</option>
                </select>
            </div>
            <div className="to-type">
                <select>
                    <option selected hidden disabled>TO</option>
                    <option>BINARY</option>
                    <option>OCTAL</option>
                    <option>DECIMAL</option>
                    <option>HEX</option>
                </select>
            </div>
            <div className="inputs">
                <input type="text" ref={inputA} />
                <input type="text" ref={inputB} readOnly />
            </div>
            <button >
                CONVERT
            </button>
        </div>
    )
}

export default Conversion;