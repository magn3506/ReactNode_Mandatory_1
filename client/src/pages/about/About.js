import React, { Component } from 'react'

// CSS
import "./about.css";

// LAYOUT
import LAYOUT from "../../components/layout/layout"

export class About extends Component {
    render() {
        return (
            <LAYOUT nav logo>
                <div className="about_content">
                    <h1>ABOUT</h1>
                    <p>This app is created a assignment for KEA Web-development React/node.js elective</p>
                    <p>The app is a fullstack solution using, REACT AND EXPRESS. The data is saved in a simple json file.</p>
                    <p>Checkout the source code <a target="_blank" href="https://github.com/magn3506/ReactNode_Mandatory_1" rel="noopener noreferrer">here</a></p>
                </div>

            </LAYOUT>
        )
    }
}

export default About
