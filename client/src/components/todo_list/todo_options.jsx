import React, { Component } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import onClickOutside from "react-onclickoutside";



export class Todo_options extends Component {


    handleClickOutside = evt => {
        this.props.onHandleCloseOptions();
    };

    render() {
        return (
            <div id={this.props.id} className="list_item_options_container">
                <div className="edit_icon_container" >
                    <FaRegEdit className="edit_icon" />
                </div>
                <div onClick={(e) => this.props.onDeleteWarningShow(e, this.props.todo)} className="delete_icon_container">
                    <RiDeleteBinLine className="delete_icon" />
                </div>
            </div>
        )
    }
}

export default onClickOutside(Todo_options);

