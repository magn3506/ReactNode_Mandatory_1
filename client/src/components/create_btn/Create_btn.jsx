import React, { Component } from 'react';
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";


// CSS
import "./Create_btn.css";


export class Create_btn extends Component {
    render() {
        return (
            <div className="craete_btn_bg_overlay">
                <Link to="/createTodo" className="create_todo_btn">
                    <BsPlusCircle className="create_todo_btn_icon" />
                </Link>
            </div>
        )
    }
}

export default Create_btn
