import React, { Component } from 'react'
import { ImSpinner2 } from "react-icons/im";


// CSS
import "./spinner.css";

export class Spinner extends Component {
    render() {
        return (
            <div className="spinner_container">
                <ImSpinner2 className="spinner_icon" />
            </div>
        )
    }
}

export default Spinner
