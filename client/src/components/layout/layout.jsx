import React, { Component } from 'react';
// import { Link } from "react-router-dom";

// RACT ICONS
import { CgMenuRight } from "react-icons/cg"

// ASSETS
import Logo from "../../assets/images/TodHooLogo.svg";

// STYLE
import "./layout.css";


export class Layout extends Component {
    render() {
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
                            <CgMenuRight className="nav_btn" />
                        </nav>}
                    </header>
                    <main className="main">
                        {this.props.children}
                    </main>
                    {/* <footer>
                    This is a footer
                </footer> */}
                </div>
            </div>
        )
    }
}

export default Layout
