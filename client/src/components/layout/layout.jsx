import React, { Component } from 'react';
import { Link } from "react-router-dom";


export class Layout extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    This is a footer
                </footer>
            </div>
        )
    }
}

export default Layout
