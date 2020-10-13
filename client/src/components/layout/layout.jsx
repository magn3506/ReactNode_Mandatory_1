import React, { Component } from 'react';
// import { Link } from "react-router-dom";

// RACT ICONS
import { CgMenuRight } from "react-icons/cg"

// ASSETS
import Logo from "../../assets/images/TodHooLogo.svg";

// STYLE
import "./layout.css";

// COMPONENTS
import NAV_LIST from "./navList";


export class Layout extends Component {


    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    handleToggleIsNavOpen = () => {
        console.log("toggle nav")
        console.log(!this.state.isOpen)
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {


        const nav_list = (this.props.nav && this.state.isOpen) ? <NAV_LIST onToggleIsNavOpen={this.handleToggleIsNavOpen} /> : ""

        return (
            <div className="site">
                <div className="app_continer center_middle">
                    <header className="header">
                        {this.props.logo && <div className="logo_container">
                            <img className="logo" src={Logo} alt="logo" />
                        </div>}
                        {
                            this.props.title && <div className="site_title">{this.props.title}</div>
                        }
                        {this.props.nav && <nav className="nav">
                            <CgMenuRight onClick={() => this.handleToggleIsNavOpen()} className="nav_btn" />
                        </nav>}
                        {nav_list}
                    </header>
                    <main className="main">
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}

export default Layout
