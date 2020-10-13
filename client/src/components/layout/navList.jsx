import React, { Component } from 'react';
import { VscClose } from "react-icons/vsc"
import { Link } from "react-router-dom";

// CSS
import "./navList.css";

export class NavList extends Component {
    render() {
        return (
            <div className="nav_list_container">
                <ul className="nav_list">
                    <li className="nav_list_item"><Link to="/home" onClick={() => { this.props.onToggleIsNavOpen() }}>Home</Link></li>
                    <li className="nav_list_item"><Link to="/about">About</Link></li>
                    <li className="nav_list_item"><Link to="/testPage">Test Page</Link></li>
                    <li className="close"><VscClose className="close_icon" onClick={() => { this.props.onToggleIsNavOpen() }} /></li>
                </ul>
            </div>

        )
    }
}

export default NavList
