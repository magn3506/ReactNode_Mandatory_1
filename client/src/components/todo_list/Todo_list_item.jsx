import React, { Component } from 'react';
import { FaBusinessTime } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import TODO_LIST_OPTIONS from "./todo_options";

export class Todo_list_item extends Component {

    constructor() {
        super();
        this.state = {
            isOptionsOpen: false,
            isOptionsOpenTargetID: undefined
        }
    }

    handleOpenOptions = (event, targetId) => {
        this.setState({
            isOptionsOpen: true,
            isOptionsOpenTargetID: targetId
        })
    }

    handleCloseOptions = (event) => {
        this.setState({
            isOptionsOpen: false,
            isOptionsOpenTargetID: undefined
        })
    }


    render() {

        const { todo, id } = this.props.todo;
        const { isOptionsOpen, isOptionsOpenTargetID } = this.state;

        const showOptionsStyle = isOptionsOpen === true && isOptionsOpenTargetID === id && <TODO_LIST_OPTIONS onDeleteWarningShow={this.props.onDeleteWarningShow} onHandleCloseOptions={this.handleCloseOptions} id={id} todo={this.props.todo} />


        return (
            <li className="todo_list_item" >
                <div className="todo_list_icon_container">
                    <FaBusinessTime className="todo_list_icon" />
                </div>

                <div className="task_text">
                    {todo}
                </div>

                <div className="list_item_btn">
                    <BsThreeDots onClick={(e) => this.handleOpenOptions(e, id)} className="list_item_btn_icon" />
                    {showOptionsStyle}
                </div>
            </li>
        )
    }
}

export default Todo_list_item
